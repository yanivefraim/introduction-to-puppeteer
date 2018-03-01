# introduction-to-puppeteer

This is a repository for my "Introduction to Puppeteer talk".

Usage:

```shell
npm i
npm test
```

In order to serve assets from 'assets' folder:

```bash
cd assets
python -m SimpleHTTPServer 3000
```

Agenda:

- different tools - chrome devtools, selenium etc.
- devtools protocol
- debug devtools ui / devtools protocol
- simple puppeteer example
- simple test with jest
- debugging
- search test
- screenshot
- addscriptTag
- intercept requests


## Reference
- Puppeteer: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md
- Nice blog post about Headless Chrome: https://developers.google.com/web/updates/2017/04/headless-chrome

- Chrome DevTools Protocol Viewer: https://chromedevtools.github.io/devtools-protocol/

- Chrome devtools frontend: https://github.com/ChromeDevTools/devtools-frontend

- Simple http server:

```bash
~/serving-folder> python -m SimpleHTTPServer 3000
```

- Debugging Canary:

    ```bash
    alias canary="/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary"
    canary --remote-debugging-port=9222 http://www.wix.com
    ```

    Open a targert and send an alert:

    ```js
    // Open websocket connection
    const ws = new WebSocket(<-webSocketDebuggerUrl->);
    // listen to incoming messages
    ws.onmessage = ms => console.log(ms);
    // Create new tab, Will return targetId
    ws.send(JSON.stringify({method: 'Target.createTarget', id: 1, params:
    {url: 'http://www.google.com'}}));
    // Attach to target using receive d targetId; It will return sessionId
    ws.send(JSON.stringify({method: 'Target.attachToTarget', id: 1, params: {targetId}}));
    // Send messages using session we received
    ws.send(JSON.stringify({method: 'Target.sendMessageToTarget', id: 3, params: {sessionId, message:'{"id":1,"method":"Runtime.callFunctionOn","params":{"executionContextId":2, "functionDeclaration": "() => alert(\'Hi from the other side\')"}}'}}))
    ```

