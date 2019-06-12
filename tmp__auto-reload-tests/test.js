const kill = require('kill-port');
const Hapi = require('hapi');
const { fork, spawn, exec } = require('child_process');

/*
var foreground = require('foreground-child')
var child = foreground('cat', [__filename])
*/

(async() => {
  console.log("PID parent: "+process.pid);
  await startServer();
//fork('./sub.js');
//exec('node ./sub.js &');
    const subprocess = spawn('node', [require.resolve('./sub')], {detached: false, stdio: 'inherit'});
  /*
  const subprocess = spawn('node', [require.resolve('./sub')], {detached: true, stdio: 'inherit'});
  */
  //subprocess.unref();
  console.log('PID sub: '+subprocess.pid);
  process.kill(process.pid, 'SIGSTOP');
  process.kill(subprocess.pid, 'SIGSTOP');
//await kill(3000);
})();

async function startServer() {
  const server = Hapi.Server({
    port: 3000,
    debug: {request: ['internal']},
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) => h.response('heelo hr !!'),
  });

  await server.start();

  console.log('Server running');

  return server;
}

