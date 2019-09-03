const renderPageToDom = require.resolve('./renderPageToDom');
const renderPageToHtml = require.resolve('./renderPageToHtml');

const config = require('@brillout/reconfig');

Object.assign(
  config.ssrCoin,
  {
    renderPageToHtml,
    renderPageToDom,
  },
);

config.ssrCoin.browserConfigs = config.ssrCoin.browserConfigs || [];
config.ssrCoin.browserConfigs.push('renderPageToDom', 'domRender');
