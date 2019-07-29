const html = require('@brillout/html');
const CONTAINER_ID = require('./CONTAINER_ID');
const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');

module.exports = renderPageToHtml;

async function renderPageToHtml({initialProps}) {
  assert_initialProps(initialProps);
  const {renderToHtml, projectDir} = config.ssrCoin;
  assert.internal(projectDir);
  let renderToHtml__file;
  try {
    renderToHtml__file = (
   // eval('require')
      require
      .resolve(renderToHtml, {paths: [projectDir]})
    );
  } catch (err) {
    assert.usage(
      false,
      "`renderToHtml` is set to `"+renderToHtml+"`.",
      "But `renderToHtml` should be the path of your `renderToHtml` file.",
      "E.g.:",
      "  // ssr-coin.config.js",
      "  module.exports = {",
      "   renderToHtml: './path/to/your/renderToHtml.js'",
      "   /* ... */",
      "  };",
    );
  }
  const renderToHtml__function = (
 // eval('require')
    require
    (renderToHtml__file)
  );
  const renderToHtml__value = await renderToHtml__function({
    page: initialProps.__sources.pageConfig,
    CONTAINER_ID,
    initialProps
  });
  assert.usage(
    renderToHtml__value && [String, Object].includes(renderToHtml__value.constructor),
    "`renderToHtml` should return a HTML string or a `@brillout/html` parameter object.",
  );

  const htmlOptions = {
    ...initialProps.__sources.pageConfig,
    initialProps,
  };

  if( renderToHtml__value.constructor===String ){
    htmlOptions.body = htmlOptions.body || [];
    htmlOptions.body = [
      ...htmlOptions.body,
      '<div id="'+CONTAINER_ID+'">'+renderToHtml__value+'</div>'
    ];
  } else {
    Object.assign(htmlOptions, renderToHtml__value);
  }

  return html(htmlOptions);
}

function assert_initialProps(initialProps) {
  assert.internal(initialProps.__sources, {initialProps});
  assert.internal(initialProps.__sources.pageConfig.view);
  assert.internal(initialProps.__sources.pageConfig.route);
}
