const renderToDomFile = require.resolve('./renderToDom');
const renderToHtmlFile = require.resolve('./renderToHtml');

const config = require('@brillout/reconfig');

Object.assign(
  config.ssrCoin,
  {
    renderToHtmlFile,
    renderToDomFile,
  },
);
