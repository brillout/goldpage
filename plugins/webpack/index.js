const config = require('@brillout/reconfig');
const runBuildFile = require.resolve('./runBuild');
const getBuildInfoFile = require.resolve('./getBuildInfo');

Object.assign(
  config.GoldSSR,
  {
    runBuildFile,
    getBuildInfoFile,
  },
);
