const ssr = require('./ssr');
const assert = require('@brillout/reassert');

module.exports = build;

async function build({silent=true, isBuildingServer}) {
  assert.internal([true, false].includes(isBuildingServer));
  assert.internal([true, false].includes(silent));
  /*
  assert.warning(
    process.env.NODE_ENV==='production',
    "You are running `build` with `process.env.NODE_ENV!=='production'`.",
    "You may want to run `dev` instead or set `process.env.NODE_ENV` to `'production'`.",
  );
  */

  const serverText = !isBuildingServer ? '' : ' & server';
  ssr.onBuildStart = () => {
    !silent && console.log('Building pages'+serverText+'...');
  };
  ssr.onBuildEnd = async () => {
    !silent && console.log('Pages'+serverText+' built.');
  };

  await ssr.build();
}
