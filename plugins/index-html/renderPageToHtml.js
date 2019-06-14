const generateHtml = require('@brillout/index-html');
const CONTAINER_ID = require('./CONTAINER_ID');
const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');

module.exports = renderPageToHtml;

async function renderPageToHtml({pageConfig, initialProps}) {
  try {
    require.resolve(config.ssrCoin.renderToHtml);
  } catch (err) {
    assert.usage(
      false,
      "`renderToHtml` should be the path of your `renderToHtml` file.",
      "E.g.:",
      "  // ssr-coin.config.js",
      "  module.exports = {",
      "   renderToHtml: './path/to/your/renderToHtml.js'",
      "   /* ... */",
      "  };",
    );
  }
  const renderToHtml = require(config.ssrCoin.renderToHtml);
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
