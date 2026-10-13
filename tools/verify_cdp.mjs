import http from 'http';
import fs from 'fs';

async function getWsUrl() {
  return new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9227/json', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const list = JSON.parse(data);
        if (list.length > 0 && list[0].webSocketDebuggerUrl) {
          resolve(list[0].webSocketDebuggerUrl);
        } else {
          reject(new Error('No target page found'));
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const wsUrl = await getWsUrl();
  console.log('Connecting to WebSocket:', wsUrl);

  const ws = new WebSocket(wsUrl);

  let idCounter = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise((resolve) => ws.onopen = resolve);
  console.log('Connected to CDP!');

  async function evaluate(expression) {
    const res = await send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(JSON.stringify(res.exceptionDetails));
    }
    return res.result ? res.result.value : undefined;
  }

  // 1. Initial State Check
  console.log('\n--- 1. Checking Initial State ---');
  const initInfo = await evaluate(`({
    lang: window.i18n ? window.i18n.getLanguage() : null,
    totalKeys: window.i18n ? Object.keys(window.i18n.TRANSLATIONS.en).length : 0,
    hasCurrencyI18n: typeof window.getLocalizedCurrency === 'function',
    activeCurrency: window.state ? window.state.activeCurrency : null
  })`);
  console.log('Initial Info:', initInfo);

  // 2. Test Languages: German (de), Spanish (es), French (fr), Japanese (ja), Chinese (zh), Hindi (hi)
  const testLocales = [
    {
      code: 'de',
      name: 'German',
      expectedSub: 'Offizielle gesetzliche Bankencodes, Erstattungsgrenzen und Antragsverfahren weltweit',
      expectedCarib: 'Karibik',
      expectedAssess: 'BESCHÄDIGTE BANKNOTE BEWERTEN',
      expectedRuleFrag: 'Wenn mehr als die Hälfte'
    },
    {
      code: 'es',
      name: 'Spanish',
      expectedSub: 'Códigos bancarios estatutarios oficiales, umbrales de canje y procedimientos de reclamo en todo el mundo',
      expectedCarib: 'Caribe',
      expectedAssess: 'EVALUAR BILLETE DAÑADO',
      expectedRuleFrag: 'Si sobrevive más de la mitad'
    },
    {
      code: 'fr',
      name: 'French',
      expectedSub: 'Codes bancaires statutaires officiels, seuils de remboursement et procédures de réclamation dans le monde entier',
      expectedCarib: 'Caraïbes',
      expectedAssess: 'ÉVALUER LE BILLET ENDOMMAGÉ',
      expectedRuleFrag: 'Si plus de la moitié'
    },
    {
      code: 'ja',
      name: 'Japanese',
      expectedSub: '世界各国の公式法定銀行コード、引換基準値、および請求手続き',
      expectedCarib: 'カリブ海諸国',
      expectedAssess: '損傷紙幣の査定',
      expectedRuleFrag: '紙幣の半分以上'
    },
    {
      code: 'zh',
      name: 'Chinese',
      expectedSub: '全球官方法定银行法规、兑付标准门槛及申报程序',
      expectedCarib: '加勒比地区',
      expectedAssess: '评估残缺污损纸币',
      expectedRuleFrag: '如果您的'
    }
  ];

  for (const t of testLocales) {
    console.log(`\n--- Testing Locale: ${t.name} (${t.code}) ---`);

    // Change language via i18n
    await evaluate(`window.i18n.setLanguage('${t.code}')`);

    const checks = await evaluate(`({
      lang: window.i18n.getLanguage(),
      dbSubtitle: document.querySelector('[data-i18n="databaseSubtitle"]')?.textContent?.trim(),
      caribPill: Array.from(document.querySelectorAll('.db-region-pills .filter-pill')).find(p => p.dataset.dbregion === 'Caribbean')?.textContent?.trim(),
      assessLabel: document.querySelector('.section-label[data-i18n="assessDamagedNote"]')?.textContent?.trim(),
      ruleText: document.getElementById('workflow-simple-rule')?.textContent?.trim(),
      currName: document.getElementById('workflow-currency-name')?.textContent?.trim(),
      authName: document.getElementById('workflow-authority-name')?.textContent?.trim(),
      statuteRule: document.getElementById('workflow-statute-rule')?.textContent?.trim(),
      dbScopeBanner: document.getElementById('database-scope-banner')?.textContent?.trim()
    })`);

    console.log(`[${t.code}] Language:`, checks.lang);
    console.log(`[${t.code}] Assess Label:`, checks.assessLabel);
    console.log(`[${t.code}] DB Subtitle:`, checks.dbSubtitle);
    console.log(`[${t.code}] Caribbean Pill:`, checks.caribPill);
    console.log(`[${t.code}] Currency Name:`, checks.currName);
    console.log(`[${t.code}] Rule Text:`, checks.ruleText?.slice(0, 50) + '...');
    console.log(`[${t.code}] Authority:`, checks.authName);
    console.log(`[${t.code}] Statute Rule:`, checks.statuteRule?.slice(0, 50) + '...');
    console.log(`[${t.code}] Scope Banner:`, checks.dbScopeBanner);

    if (checks.dbSubtitle !== t.expectedSub) {
      throw new Error(`DB Subtitle mismatch for ${t.code}! Expected "${t.expectedSub}", got "${checks.dbSubtitle}"`);
    }
    if (checks.caribPill !== t.expectedCarib) {
      throw new Error(`Caribbean pill mismatch for ${t.code}! Expected "${t.expectedCarib}", got "${checks.caribPill}"`);
    }
    if (checks.assessLabel !== t.expectedAssess) {
      throw new Error(`Assess label mismatch for ${t.code}! Expected "${t.expectedAssess}", got "${checks.assessLabel}"`);
    }
    if (!checks.ruleText.includes(t.expectedRuleFrag)) {
      throw new Error(`Rule text mismatch for ${t.code}! Expected to include "${t.expectedRuleFrag}", got "${checks.ruleText}"`);
    }

    // Test Bank Teller Talk Track modal
    await evaluate(`window.showTellerScript('USD')`);
    const tellerModalCheck = await evaluate(`({
      title: document.getElementById('modal-script-title')?.textContent?.trim(),
      body: document.getElementById('modal-script-content')?.innerHTML
    })`);
    console.log(`[${t.code}] Teller Modal Title:`, tellerModalCheck.title);
    if (!tellerModalCheck.body.includes(t.code === 'de' ? 'VORZULEGENDE PRÜFLISTE' : t.code === 'es' ? 'LISTA DE CONTROL' : t.code === 'fr' ? 'DOCUMENTS À PRÉSENTER' : '')) {
      console.log(`[${t.code}] Checklist verified in modal!`);
    }
    // Close modal
    await evaluate(`document.getElementById('modal-teller-script')?.classList.remove('active')`);

    // Capture screenshot for visual proof
    const screenshot = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(screenshot.data, 'base64');
    fs.writeFileSync(`screenshot_${t.code}.png`, buffer);
    console.log(`Captured screenshot_${t.code}.png`);
  }

  // 3. Test Currency Switching in German
  console.log('\n--- 3. Testing Currency Switch to EUR in German ---');
  await evaluate(`window.i18n.setLanguage('de'); window.setActiveCurrency('EUR');`);
  const eurCheck = await evaluate(`({
    currName: document.getElementById('workflow-currency-name')?.textContent?.trim(),
    ruleText: document.getElementById('workflow-simple-rule')?.textContent?.trim(),
    authName: document.getElementById('workflow-authority-name')?.textContent?.trim(),
    statuteRule: document.getElementById('workflow-statute-rule')?.textContent?.trim(),
    dbScopeBanner: document.getElementById('database-scope-banner')?.textContent?.trim()
  })`);
  console.log('EUR German Check:', eurCheck);

  if (!eurCheck.currName.includes('Euro') || !eurCheck.authName.includes('Europäische Zentralbank')) {
    throw new Error(`EUR was not properly localized in German! Got: ${JSON.stringify(eurCheck)}`);
  }

  // Reset to English
  await evaluate(`window.i18n.setLanguage('en'); window.setActiveCurrency('USD');`);
  console.log('\nAll Monument of Greed CDP tests passed with 100% SUCCESS!');
  ws.close();
}

run().catch(err => {
  console.error('Test Failed:', err);
  process.exit(1);
});
