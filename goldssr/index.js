const config = require('@brillout/reconfig').getConfig({configFileName: require.resolve('./reframe.config.js')});
const HapiAdapter = require('@universal-adapter/hapi');
const assert = require('reassert');

const autoload = require('@brillout/autoload');

autoload();

  process.exit();

module.exports = GoldSSR;

function GoldSSR(options) {

  assert(config.ServerRendering);
  assert(config.StaticAssets);

  const hapi = (
    new HapiAdapter([
      // Run `$ reframe eject server-rendering` to eject the server rendering code
      config.ServerRendering,
      // Run `$ reframe eject server-assets` to eject the static asset serving code
      config.StaticAssets,
    ])
  );

  Object.assign(
    this,
    {
      build,
      hapi,
    },
  );

  async function build() {
    await config.runBuild();
  }
}
