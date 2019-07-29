const Vue = require('vue');

module.exports = renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  const vm = new Vue({
    render: createElement => createElement(page.view, {props: initialProps}),
  });

  vm.$mount('#'+CONTAINER_ID);
}
