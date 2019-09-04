const config = require('@brillout/reconfig');
const runBuild = require('./runBuild');
const getBuildInfo = require('./getBuildInfo');

Object.assign(
  config.goldpage,
  {
    runBuild,
    getBuildInfo,
    onBuild: null,
    buildStarted: false,
  },
);
