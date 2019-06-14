const renderToDom = require.resolve('./renderToDom');
const renderToHtml = require.resolve('./renderToHtml');

const config = require('@brillout/reconfig');

Object.assign(
  config.ssrCoin,
  {
    renderToHtml,
    renderToDom,
  },
);
