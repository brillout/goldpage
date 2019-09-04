const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const KoaAdapter = require('@universal-adapter/koa');

config.goldpage.serverAdapters = config.goldpage.serverAdapters || {};
config.goldpage.serverAdapters.koa = (
  new KoaAdapter(() => {
    const {StaticAssets, ServerRendering} = config.goldpage;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
