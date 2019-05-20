const Hapi = require('hapi');
const GoldSSR = require('goldssr');

const ssr = new GoldSSR({
  pagesDir: __dirname+'/pages',
  log: {
    buildingText: 'Building pages...',
    builtText: 'Pages built',
  },

  typescript: {
    // Syntax transformation is done with `@babel/preset-typescript`
    // Options:
    babelPresetTypescript: {
      isTSX: true, // default value
      allExtensions: true, // default value
    },

    // Type checking is done with `fork-ts-checker-webpack-plugin`
    // Options:
    forkTsCheckerWebpackPlugin: {
      // To enable type checking set `enable: true`
      enable: true,
    },
  },
});

module.exports = start();

async function start() {
  await ssr.build();

  const server = Hapi.Server({
      port: process.env.PORT || 3000,
      debug: {request: ['internal']},
  });

  await server.register(ssr.hapi);

  await server.start();

  console.log('Server running');

  return server;
}
