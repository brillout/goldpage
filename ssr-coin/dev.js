const ssr = require('./ssr');
const require_ = require('@brillout/require-gold');
const assert = require('@brillout/reassert');

assert.usage(
  process.env.NODE_ENV!=='production',
  "`dev` shouldn't be run with `process.env.NODE_ENV==='production'`.",
);

let server;
ssr.onBuild = async ({serverBuildEntry, serverEntryFile}) => {
  if( server ) {
    if( server.close ){
      await server.close();
    } else if( server.stop ){
      await server.stop();
    }
  }
  server = await require_(serverBuildEntry, {skipCache: true});
  assert.usage(
    server && (server.close || server.stop),
    "`"+serverEntryFile+"` should return an object with a `close()` or `stop()` function",
  );
};

ssr.build();
