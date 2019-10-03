let isEnabled;

connect();

function connect() {
    let autoReloadPort;
    try {
      autoReloadPort = __WEBPACK__PORT__;
    } catch(err) {
      autoReloadPort = 3218;
      console.warning('Auto-reload port not set. Defaulting to '+autoReloadPort+'.');
    }

    const socket = new WebSocket('ws://localhost:'+autoReloadPort);

    socket.onmessage = ev => {
        if( ev.data === 'RELOAD_BROWSER' ) {
            reloadBrowser();
        }
    };

    socket.onopen = () => {
        console.log("Auto-reload enabled.");
        if( isEnabled === false ) {
            reloadBrowser();
        }
        isEnabled = true;
    };

    // Automatically Reconnect when no connection
    // Source: https://stackoverflow.com/questions/22431751/websocket-how-to-automatically-reconnect-after-it-dies
    socket.onclose = () => {
        setTimeout(function() {
            connect();
        }, 1000);
    };

    socket.onerror = () => {
        if( isEnabled !== false ) {
            console.warn("Auto-reload disabled.");
        }
        isEnabled = false;
        socket.close();
    };
}

async function reloadBrowser() {
    await awaitServer();
    document.location.reload();
}

async function awaitServer() {
  try {
    await fetch(location.href);
  } catch(err) {
    await sleep(0.3);
    await awaitServer();
  }
}
function sleep(seconds) {
  let resolve;
  const promise = new Promise(resolve_ => resolve = resolve_);
  setTimeout(resolve, seconds*1000);
  return promise;
}
