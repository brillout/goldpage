const renderToDomFile = require.resolve('./renderToDom');
const renderToHtmlFile = require.resolve('./renderToHtml');

const {config, AppendArray} = require('@brillout/reconfig');

Object.assign(
  config,
  {
    renderToHtmlFile,
    renderToDomFile,
  },
);
