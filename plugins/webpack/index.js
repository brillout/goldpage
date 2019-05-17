const {reconfig} = require('@brillout/reconfig');
const runBuildFile = require.resolve('./runBuild');
const getBuildInfoFile = require.resolve('./getBuildInfo');

Object.assign(
  reconfig,
  {
    runBuildFile,
    getBuildInfoFile,
  },
);
