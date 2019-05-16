const generateHtml = require('@brillout/index-html');
const CONTAINER_ID = require('./CONTAINER_ID');
const {config} = require('@brillout/reconfig');
const assert = require('@brillout/reassert');

module.exports = renderPageToHtml;

async function renderPageToHtml({pageConfig, initialProps}) {
  const renderToHtml = require(config.renderToHtmlFile);
  const contentHtml = await renderToHtml({pageConfig, initialProps});
  assert.usage(
    contentHtml && contentHtml.constructor===String,
    "`renderToHtml` should return HTML",
  );

  return (
    generateHtml({
      bodyHtmls: [
        '<div id="'+CONTAINER_ID+'">'+contentHtml+'</div>',
      ],
      ...pageConfig,
    })
  );
}
