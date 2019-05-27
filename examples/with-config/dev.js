const ssr = require('ssr-coin');
const require_ = require('@brillout/require-gold');
const assert = require('@brillout/reassert');

let server;
ssr.onBuild = async ({serverBuildEntry, serverEntryFile}) => {
  if( server ) {
    await server.stop();
  }
  server = await require_(serverBuildEntry, {skipCache: true});
  assert.usage(
    server && server.stop,
    "The server entry `"+serverEntryFile+"` should return an object with a `stop()` function",
  )
};

ssr.build();
