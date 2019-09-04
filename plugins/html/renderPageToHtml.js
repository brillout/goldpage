const html = require('@brillout/html');
const CONTAINER_ID = require('./CONTAINER_ID');
const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');

module.exports = renderPageToHtml;

async function renderPageToHtml({initialProps}) {
  assert_initialProps(initialProps);
  const {htmlRender, projectDir} = config.ssrCoin;
  assert.internal(projectDir);
  let htmlRender__file;
  try {
    htmlRender__file = (
   // eval('require')
      require
      .resolve(htmlRender, {paths: [projectDir]})
    );
  } catch (err) {
    assert.usage(
      false,
      "`htmlRender` is set to `"+htmlRender+"`.",
      "But `htmlRender` should be the path of your `htmlRender` file.",
      "E.g.:",
      "  // goldpage.config.js",
      "  module.exports = {",
      "   htmlRender: './path/to/your/htmlRender.js'",
      "   /* ... */",
      "  };",
    );
  }
  const htmlRender__function = (
 // eval('require')
    require
    (htmlRender__file)
  );
  const {pageConfig} = initialProps.__sources;
  let htmlRender__value;
  assert.usage(
    !('renderToHtml' in pageConfig) || [true, false].includes(pageConfig.renderToHtml),
    {pageConfig},
    "`renderToHtml` should be `true` or `false`",
  );
  if( pageConfig.renderToHtml ){
    htmlRender__value = await htmlRender__function({
      page: pageConfig,
      CONTAINER_ID,
      initialProps
    });
    assert.usage(
      htmlRender__value && [String, Object].includes(htmlRender__value.constructor),
      "`htmlRender` should return a HTML string or a `@brillout/html` parameter object.",
    );
  } else {
    htmlRender__value = '';
  }

  const htmlOptions = {
    ...initialProps.__sources.pageConfig,
    initialProps,
  };

  if( htmlRender__value.constructor===String ){
    htmlOptions.body = htmlOptions.body || [];
    htmlOptions.body = [
      ...htmlOptions.body,
      '<div id="'+CONTAINER_ID+'">'+htmlRender__value+'</div>'
    ];
  } else {
    Object.assign(htmlOptions, htmlRender__value);
  }

  return html(htmlOptions);
}

function assert_initialProps(initialProps) {
  assert.internal(initialProps.__sources, {initialProps});
  assert.internal(initialProps.__sources.pageConfig.view);
  assert.internal(initialProps.__sources.pageConfig.route);
}
