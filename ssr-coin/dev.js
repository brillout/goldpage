const ssr = require('./ssr');
const assert = require('@brillout/reassert');
const {fork} = require('child_process');

assert.usage(
  process.env.NODE_ENV!=='production',
  "`dev` shouldn't be run with `process.env.NODE_ENV==='production'`.",
);

let server_process;
ssr.onBuild = async ({serverBuildEntry}) => {
  if( !serverBuildEntry ){
    return;
  }

  if( server_process ){
    server_process.kill();
  }
  server_process = fork(serverBuildEntry, {env: {ALREADY_BUILT: "yes"}});
}

ssr.build();
