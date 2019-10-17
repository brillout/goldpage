const WebSocket = require('ws');
const assert_warning = require('reassert/warning');
const assert_internal = require('reassert/internal');
const {colorWarning, colorEmphasis} = require('@brillout/cli-theme');

module.exports = reloadBrowser;

let reloadSocket;

function reloadBrowser({autoReloadPort}) {
    assert_internal(autoReloadPort && autoReloadPort.constructor===Number, {autoReloadPort});
    if( ! reloadSocket ) {
        reloadSocket = new WebSocket.Server({port: autoReloadPort});
    }
    improveErrorHandling(reloadSocket, autoReloadPort);
    broadcast(reloadSocket, 'RELOAD_BROWSER');
}

function broadcast(socket, data) {
  socket.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
          client.send(data);
      }
  });
}

function improveErrorHandling(reloadSocket, autoReloadPort) {
    reloadSocket.on("error", err => {
        if( ! ((err||{}).message||'').includes('EADDRINUSE') ) {
            throw err;
        }
        assert_warning(
            false,
            colorWarning("Autoreload disabled."),
            "Because the port "+autoReloadPort+" is already in use.",
            colorEmphasis('Either make the port '+autoReloadPort+' available or change the auto-reload port.'),
            'You can change the auto-reload port by setting `autoReloadPort` in your `goldpage.config.js`. For example:',
            '~~~js',
            '// This is the `golgpage.config.js` file at the project root directory.',
            'module.exports = {',
            "  autoReloadPort: '3219', // We use another auto-reload port because the default auto-reload port `3128` is already in use.",
            '};',
            '~~~',
            '',
            '',
        );
    });
}
