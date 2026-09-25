const http = require('http');
const fs = require('fs');
const { execSync } = require('child_process');

async function getWsUrl() {
  const json = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json/list', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
  return json.find(t => t.type === 'page')?.webSocketDebuggerUrl;
}

class CDP {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 1;
    this.pending = new Map();
  }
  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((res, rej) => {
      this.ws.onopen = res;
      this.ws.onerror = rej;
    });
    this.ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.id && this.pending.has(data.id)) {
        this.pending.get(data.id)(data.result);
        this.pending.delete(data.id);
      }
    };
  }
  eval(expression) {
    const id = this.id++;
    return new Promise((resolve) => {
      this.pending.set(id, resolve);
      this.ws.send(JSON.stringify({
        id,
        method: 'Runtime.evaluate',
        params: { expression, returnByValue: true, awaitPromise: true }
      }));
    });
  }
  close() {
    this.ws.close();
  }
}

async function capture(filename) {
  await new Promise(r => setTimeout(r, 400));
  execSync(`adb exec-out screencap -p > "${filename}"`);
  console.log(`Saved screenshot: ${filename}`);
}

async function main() {
  const artifactDir = '/home/davidalujones/.gemini/antigravity/brain/89961693-65ba-4618-b391-12c2d9ceb7ba';
  const wsUrl = await getWsUrl();
  const cdp = new CDP(wsUrl);
  await cdp.connect();

  // 1. Capture Scanner Sub-tab showing Top Back Button
  await cdp.eval(`window.switchTab('tab-scanner')`);
  await capture(`${artifactDir}/screen_top_back_button_verified.png`);

  // 2. Open Info Sheet modal (Statutory Knowledge) and capture
  await cdp.eval(`window.openStatutoryInfo('statute-general')`);
  await capture(`${artifactDir}/screen_info_sheet_statute_verified.png`);

  // Close info sheet
  await cdp.eval(`document.getElementById('btn-info-sheet-back').click()`);

  // 3. Open Counter Shield and capture high-contrast view
  await cdp.eval(`window.openCounterShield()`);
  await capture(`${artifactDir}/screen_counter_shield_high_contrast_verified.png`);

  // Close Counter Shield
  await cdp.eval(`document.getElementById('btn-shield-back').click()`);

  // 4. Switch to Vault in light theme and capture clean input fields
  await cdp.eval(`applyTheme('theme-clay-peach')`);
  await cdp.eval(`window.switchTab('tab-vault')`);
  await capture(`${artifactDir}/screen_vault_light_theme_verified.png`);

  // Return to Home tab
  await cdp.eval(`window.switchTab('tab-home')`);
  await capture(`${artifactDir}/screen_home_dashboard_clean_verified.png`);

  cdp.close();
  console.log('All screenshots captured successfully!');
}

main().catch(console.error);
