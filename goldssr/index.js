const config = require('@brillout/reconfig').getConfig({configFileName: require.resolve('./reframe.config.js')});

module.exports = GoldSSR;

function GoldSSR(options) {

  Object.assign(
    this,
    {
      build,
      hapi: {},
    },
  );

  async function build() {
    await config.runBuild();
  }
}
