const http = require('http');

async function getWsUrl() {
  const json = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json/list', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const page = json.find(t => t.type === 'page') || json[0];
  if (!page || !page.webSocketDebuggerUrl) {
    throw new Error('No webSocketDebuggerUrl found');
  }
  return page.webSocketDebuggerUrl;
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.msgId = 1;
    this.pending = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && this.pending.has(data.id)) {
        const { resolve } = this.pending.get(data.id);
        this.pending.delete(data.id);
        resolve(data.result);
      }
    };
  }

  async eval(expression) {
    const id = this.msgId++;
    const msg = JSON.stringify({
      id,
      method: 'Runtime.evaluate',
      params: {
        expression,
        returnByValue: true,
        awaitPromise: true
      }
    });

    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(msg);
    }).then(res => {
      if (res?.result) {
        return res.result.value;
      }
      return undefined;
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function runTests() {
  console.log('=== STARTING MONUMENT OF GREED AUTOMATED VERIFICATION SUITE ===\n');
  const wsUrl = await getWsUrl();
  const cdp = new CDPClient(wsUrl);
  await cdp.connect();

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  try {
    // 1. Navigation & Top Bar Back Button
    console.log('[TEST GROUP 1] Navigation & Top Bar Back Button');
    await cdp.eval(`(function() {
      const brand = document.getElementById('brand-header-link');
      if (brand) brand.click();
    })()`);

    const initialTopBackDisplay = await cdp.eval(`window.getComputedStyle(document.getElementById('btn-top-back')).display`);
    const initialDrawerDisplay = await cdp.eval(`window.getComputedStyle(document.getElementById('btn-drawer-open')).display`);
    assert(initialTopBackDisplay === 'none', 'On Home tab, #btn-top-back is hidden (display: none)');
    assert(initialDrawerDisplay !== 'none', 'On Home tab, #btn-drawer-open is visible');

    // Navigate to Scanner
    await cdp.eval(`document.querySelector('.bottom-nav .nav-tab-btn[data-tab="tab-scanner"]').click()`);
    const scannerTopBackDisplay = await cdp.eval(`window.getComputedStyle(document.getElementById('btn-top-back')).display`);
    const scannerDrawerDisplay = await cdp.eval(`window.getComputedStyle(document.getElementById('btn-drawer-open')).display`);
    assert(scannerTopBackDisplay !== 'none', 'On Scanner tab, #btn-top-back is visible (display: inline-flex)');
    assert(scannerDrawerDisplay === 'none', 'On Scanner tab, #btn-drawer-open is hidden (display: none)');

    // Click Top Back Button
    await cdp.eval(`document.getElementById('btn-top-back').click()`);
    const afterBackTab = await cdp.eval(`window.state ? window.state.activeTab : document.querySelector('.tab-pane.active')?.id`);
    const afterBackTopBackDisplay = await cdp.eval(`window.getComputedStyle(document.getElementById('btn-top-back')).display`);
    assert(afterBackTab === 'tab-home', 'Clicking Top Back navigates back to Home tab');
    assert(afterBackTopBackDisplay === 'none', 'Back on Home tab, #btn-top-back is hidden again');

    // Breadcrumb navigation: Home -> Grid -> Database -> Back -> Grid -> Back -> Home
    await cdp.eval(`document.querySelector('.bottom-nav .nav-tab-btn[data-tab="tab-grid"]').click()`);
    await cdp.eval(`document.querySelector('.bottom-nav .nav-tab-btn[data-tab="tab-database"]').click()`);
    const dbTab = await cdp.eval(`window.state ? window.state.activeTab : document.querySelector('.tab-pane.active')?.id`);
    assert(dbTab === 'tab-database', 'Navigated to Database tab');

    await cdp.eval(`document.getElementById('btn-top-back').click()`);
    const backToGrid = await cdp.eval(`window.state ? window.state.activeTab : document.querySelector('.tab-pane.active')?.id`);
    assert(backToGrid === 'tab-grid', 'First Top Back returns to Grid tab');

    await cdp.eval(`document.getElementById('btn-top-back').click()`);
    const backToHome = await cdp.eval(`window.state ? window.state.activeTab : document.querySelector('.tab-pane.active')?.id`);
    assert(backToHome === 'tab-home', 'Second Top Back returns to Home tab');

    // 2. Info-Circle System & Knowledge Base
    console.log('\n[TEST GROUP 2] Universal Information System (ⓘ Buttons & Knowledge Base)');
    const infoButtonsCount = await cdp.eval(`document.querySelectorAll('.info-circle-btn').length`);
    assert(infoButtonsCount >= 10, `Found ${infoButtonsCount} interactive ⓘ info-circle buttons across the app (expected >= 10)`);

    const infoKeys = [
      'statute-general',
      'scanner-cv',
      'grid-formula',
      'jigsaw-union',
      'lightbox-watermark',
      'batch-manifest',
      'chain-custody',
      'dossier-courtroom',
      'numismatic-collector',
      'vault-ledger'
    ];

    for (const key of infoKeys) {
      const title = await cdp.eval(`(function() {
        window.openStatutoryInfo('${key}');
        return document.getElementById('info-sheet-title').textContent;
      })()`);
      const isModalActive = await cdp.eval(`document.getElementById('modal-info-sheet').classList.contains('active')`);
      assert(isModalActive && title && title.length > 5, `Knowledge topic '${key}' opens modal with title: "${title}"`);

      // Close via Back button
      await cdp.eval(`document.getElementById('btn-info-sheet-back').click()`);
      const isClosed = await cdp.eval(`!document.getElementById('modal-info-sheet').classList.contains('active')`);
      assert(isClosed, `Topic '${key}' modal cleanly closes via ← Back button`);
    }

    // 3. Modal Back Buttons across all modals
    console.log('\n[TEST GROUP 3] Universal Modal ← Back Buttons');
    const modalTests = [
      {
        name: 'Counter Shield',
        open: 'window.openCounterShield()',
        modalId: 'modal-counter-shield',
        backId: 'btn-shield-back'
      },
      {
        name: 'Jigsaw Assembler',
        open: 'window.openJigsawAssembler()',
        modalId: 'modal-jigsaw-assembler',
        backId: 'btn-jigsaw-back'
      },
      {
        name: 'Watermark Lightbox',
        open: 'window.openWatermarkLightbox()',
        modalId: 'modal-watermark-lightbox',
        backId: 'btn-lightbox-back'
      },
      {
        name: 'Disaster Batch Manifest',
        open: 'window.openBatchManifest()',
        modalId: 'modal-batch-manifest',
        backId: 'btn-batch-back'
      },
      {
        name: 'Official Form Viewer',
        open: 'showOfficialForm("BEP5283")',
        modalId: 'modal-form-viewer',
        backId: 'btn-form-viewer-back'
      },
      {
        name: 'Teller Script',
        open: 'showTellerScript("USD")',
        modalId: 'modal-teller-script',
        backId: 'btn-teller-script-back'
      },
      {
        name: 'Sworn Affidavit',
        open: `(function() {
          const btn = document.getElementById('btn-open-affidavit-modal');
          if (btn) btn.click();
          else document.getElementById('modal-affidavit-generator').classList.add('active');
        })()`,
        modalId: 'modal-affidavit-generator',
        backId: 'btn-affidavit-back'
      },
      {
        name: 'Reciprocity Recovery Kit',
        open: `(function() {
          const btn = document.getElementById('btn-claim-free-packet');
          if (btn) btn.click();
          else document.getElementById('modal-reciprocity-gift').classList.add('active');
        })()`,
        modalId: 'modal-reciprocity-gift',
        backId: 'btn-gift-back'
      },
      {
        name: 'Currency Selector',
        open: `document.getElementById('btn-currency-selector').click()`,
        modalId: 'modal-currency-selector',
        backId: 'btn-currency-back'
      },
      {
        name: 'Vault Input Modal',
        open: `showVaultModal("Test Modal", "Testing back button", "VAL123", () => {})`,
        modalId: 'modal-vault-input',
        backId: 'btn-vault-input-back'
      }
    ];

    for (const m of modalTests) {
      await cdp.eval(m.open);
      const opened = await cdp.eval(`document.getElementById('${m.modalId}').classList.contains('active')`);
      assert(opened, `Modal '${m.name}' opens successfully`);

      await cdp.eval(`document.getElementById('${m.backId}').click()`);
      const closed = await cdp.eval(`!document.getElementById('${m.modalId}').classList.contains('active')`);
      assert(closed, `Modal '${m.name}' closes cleanly via #${m.backId}`);
    }

    // 4. Contrast & Theme Overrides
    console.log('\n[TEST GROUP 4] UI/UX Contrast & Styling Overrides');
    await cdp.eval(`applyTheme('theme-clay-peach')`);

    // Open Counter Shield and check text color in light theme
    await cdp.eval(`window.openCounterShield()`);
    const statuteColor = await cdp.eval(`window.getComputedStyle(document.getElementById('shield-statute-text')).color`);
    const currNameColor = await cdp.eval(`window.getComputedStyle(document.getElementById('shield-curr-name')).color`);
    assert(statuteColor === 'rgb(248, 250, 252)', `Counter Shield statute text is high-contrast light (#f8fafc = ${statuteColor})`);
    assert(currNameColor === 'rgb(248, 250, 252)', `Counter Shield currency name is high-contrast light (#f8fafc = ${currNameColor})`);
    await cdp.eval(`document.getElementById('btn-shield-back').click()`);

    // Check Vault card tracking input in theme-clay-peach
    await cdp.eval(`document.querySelector('.bottom-nav .nav-tab-btn[data-tab="tab-vault"]').click()`);
    const trackingInputBg = await cdp.eval(`(function() {
      const input = document.querySelector('.vault-tracking-input');
      return input ? window.getComputedStyle(input).backgroundColor : 'N/A';
    })()`);
    const trackingInputColor = await cdp.eval(`(function() {
      const input = document.querySelector('.vault-tracking-input');
      return input ? window.getComputedStyle(input).color : 'N/A';
    })()`);
    assert(trackingInputBg === 'rgb(255, 255, 255)', `Vault tracking input in light theme has white background (${trackingInputBg})`);
    assert(trackingInputColor === 'rgb(30, 41, 59)', `Vault tracking input in light theme has dark slate text (${trackingInputColor})`);

    // Return to Home tab
    await cdp.eval(`(function() {
      const brand = document.getElementById('brand-header-link');
      if (brand) brand.click();
    })()`);

    console.log(`\n=== TEST SUITE COMPLETE: ${passed} PASSED, ${failed} FAILED ===\n`);
    cdp.close();
    return { passed, failed };
  } catch (err) {
    cdp.close();
    throw err;
  }
}

runTests().then(res => {
  if (res.failed > 0) process.exit(1);
}).catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
