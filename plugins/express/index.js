const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const ExpressAdapter = require('@universal-adapter/express');

config.goldpage.serverAdapters = config.goldpage.serverAdapters || {};
config.goldpage.serverAdapters.express = (
  new ExpressAdapter(() => {
    const {StaticAssets, ServerRendering} = config.goldpage;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
