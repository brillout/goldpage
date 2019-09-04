const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const HapiAdapter = require('@universal-adapter/hapi');

config.goldpage.serverAdapters = config.goldpage.serverAdapters || {};
config.goldpage.serverAdapters.hapi = (
  new HapiAdapter(() => {
    const {StaticAssets, ServerRendering} = config.goldpage;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
