const http = require('http');

async function evalInApp(expression) {
  const json = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json/list', res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const wsUrl = json[0]?.webSocketDebuggerUrl;
  if (!wsUrl) throw new Error('No webSocketDebuggerUrl found');

  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  const id = 1;
  const msg = JSON.stringify({
    id,
    method: 'Runtime.evaluate',
    params: {
      expression,
      returnByValue: true,
      awaitPromise: true
    }
  });

  ws.send(msg);

  const res = await new Promise((resolve) => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === id) {
        resolve(data.result);
      }
    };
  });

  ws.close();
  return res;
}

const expr = process.argv.slice(2).join(' ') || 'document.title';
evalInApp(expr).then(res => {
  console.log(JSON.stringify(res, null, 2));
}).catch(err => {
  console.error(err);
  process.exit(1);
});
