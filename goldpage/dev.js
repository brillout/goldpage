const ssr = require('./ssr');
const assert = require('@brillout/reassert');
const build = require('./build');

module.exports = dev;

async function dev({silent=true, isBuildingServer}) {
  assert.usage(
    process.env.NODE_ENV!=='production',
    "`dev` shouldn't be run with `process.env.NODE_ENV==='production'`.",
  );

  if( isBuildingServer ) {
    serverAutoRestart();
  }

  await build({silent, isBuildingServer});
}

async function serverAutoRestart() {
  const {fork} = require('child_process');

  let server_process;

  ssr.onBuild = async ({serverBuildEntry}) => {
    assert.internal(serverBuildEntry);

    if( server_process ){
      server_process.kill();
    }
    server_process = fork(serverBuildEntry, {env: {ALREADY_BUILT: "yes"}});
  };
}
