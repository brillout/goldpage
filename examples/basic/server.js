const Hapi = require('hapi');
const ssr = require('goldssr');

module.exports = startServer();

async function startServer() {
  const server = Hapi.Server({
    port: process.env.PORT || 3000,
    debug: {request: ['internal']},
  });

  server.route({
    method: 'GET',
    path: '/hapi-route',
    handler: (req, h) => h.response('heelo hr!!'),
  });

  await server.register(ssr.hapi);

  await server.start();

  console.log('Server running');

  return server;
}
