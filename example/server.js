const Hapi = require('hapi');
const GoldSSR = require('goldssr');

const ssr = new GoldSSR({
  pages: [
    require.resolve('./pages/landing-page'),
  ],
});

module.exports = start();

async function start() {
  await ssr.build();

  const server = Hapi.Server({
      port: process.env.PORT || 3000,
      debug: {request: ['internal']},
  });

  /*
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Hello fro',
  });
  */

  await server.register(ssr.hapi);

  await server.start();

  console.log('Server running');

  return server;
}
