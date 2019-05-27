const renderPageToDomFile = require.resolve('./renderPageToDom');
const renderPageToHtmlFile = require.resolve('./renderPageToHtml');

const config = require('@brillout/reconfig');

Object.assign(
  config.ssrCoin,
  {
    renderPageToHtmlFile,
    renderPageToDomFile,
  },
);

config.ssrCoin.browserConfigs = config.ssrCoin.browserConfigs || [];
config.ssrCoin.browserConfigs.push('renderPageToDomFile', 'renderToDomFile');
