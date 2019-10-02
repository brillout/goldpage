const ssr = require('./ssr');
const assert = require('@brillout/reassert');
const build = require('./build');
const {fork} = require('child_process');

module.exports = dev;

async function dev({silent=true, isBuildingServer}) {
  assert.internal([true, false].includes(isBuildingServer));
  assert.internal([true, false].includes(silent));
  assert.usage(
    process.env.NODE_ENV!=='production',
    "`dev` should not be run with `process.env.NODE_ENV==='production'`.",
  );

  const serverText = !isBuildingServer ? '' : ' & server';

  ssr.onBuildStart = () => {
    !silent && console.log('Building pages'+serverText+'...');
  };

  let server_process;
  ssr.onBuildEnd = async ({serverBuildEntry}) => {
    !silent && console.log('Pages'+serverText+' built.');

    if( serverBuildEntry ) {
      if( server_process ){
        server_process.kill();
      }
      server_process = fork(serverBuildEntry, {env: {ALREADY_BUILT: "yes"}});
    }
  };

  await ssr.build();
}
