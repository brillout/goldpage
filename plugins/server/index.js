const ServerRendering = require('./ServerRendering');
const StaticAssets = require('./StaticAssets');
const config = require('@brillout/reconfig');

Object.assign(
  config.GoldSSR,
  {
    ServerRendering,
    StaticAssets,
  },
);
