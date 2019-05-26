const Hapi = require('hapi');
const ssr = require('goldssr');

module.exports = start();

async function start() {
  const server = Hapi.Server({
      port: process.env.PORT || 3000,
      debug: {request: ['internal']},
  });

  await server.register(ssr.hapi);

  await server.start();

  console.log('Server running');

  return server;
}
