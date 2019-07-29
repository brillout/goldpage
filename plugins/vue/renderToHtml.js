const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');

module.exports = renderToHtml;

async function renderToHtml({page, initialProps}) {
  const vm = new Vue({
    render: createElement => createElement(page.view, {props: initialProps}),
  });

  const renderer = VueServerRenderer.createRenderer();

  const html = await renderer.renderToString(vm);

  return html;
}
