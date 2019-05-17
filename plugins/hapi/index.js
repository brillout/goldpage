const {reconfig} = require('@brillout/reconfig');
const HapiAdapter = require('@universal-adapter/hapi');
const assert = require('reassert');

reconfig.serverAdapters = reconfig.serverAdapters || {};
Object.defineProperty(
  reconfig.serverAdapters,
  'hap',
  {get: getHapiPlugin},
);
/*
Object.assign(
  reconfig,
  {
    serverAdapters: ObjectExtend({
      hapi: getHapiPlugin(),
    }),
  },
);
*/

function getHapiPlugin() {
  assert(reconfig.ServerRenderingFile);
  assert(reconfig.StaticAssetsFile);
  const ServerRendering = require(reconfig.ServerRenderingFile);
  const StaticAssets = require(reconfig.StaticAssetsFile);
  assert(ServerRendering);
  assert(StaticAssets);

  const hapi = (
    new HapiAdapter([
      ServerRendering,
      StaticAssets,
    ])
  );

  return hapi;
}
