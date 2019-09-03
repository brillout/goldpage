const VueServerRenderer = require('vue-server-renderer');
const getVueInstance = require('./getVueInstance');

module.exports = htmlRender;

async function htmlRender({page, initialProps}) {
  const renderer = VueServerRenderer.createRenderer();

  const vm = getVueInstance(page.view, initialProps);

  const html = await renderer.renderToString(vm);

  return html;
}
