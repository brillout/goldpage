const config = require('@brillout/reconfig');
const runBuild = require('./runBuild');
const getBuildInfo = require('./getBuildInfo');

Object.assign(
  config.GoldSSR,
  {
    runBuild,
    getBuildInfo,
    onBuild: null,
  },
);
