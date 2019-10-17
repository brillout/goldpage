const config = require('@brillout/reconfig');
const runBuild = require('./runBuild');
const getBuildInfo = require('./getBuildInfo');
const reloadBrowser = require('webpack-ssr/reloadBrowser');

Object.assign(
  config.goldpage,
  {
    runBuild,
    getBuildInfo,
    onBuild: null,
    buildStarted: false,
    reloadBrowser: () => {
      const {autoReloadPort} = config.goldpage;
      reloadBrowser({autoReloadPort});
    },
  },
);
