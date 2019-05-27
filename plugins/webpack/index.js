const config = require('@brillout/reconfig');
const runBuild = require('./runBuild');
const getBuildInfo = require('./getBuildInfo');

Object.assign(
  config.ssrCoin,
  {
    runBuild,
    getBuildInfo,
    onBuild: null,
  },
);
