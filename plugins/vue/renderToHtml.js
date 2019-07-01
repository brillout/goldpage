const VueServerRenderer = require('vue-server-renderer');

module.exports = renderToHtml;

async function renderToHtml({page, initialProps, CONTAINER_ID}) {
  const renderer = VueServerRenderer.createRenderer();

  const html = await renderer.renderToString(page.view);

  return html;
}
