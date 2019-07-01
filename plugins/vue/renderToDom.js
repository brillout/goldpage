module.exports = renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  page.view.$mount('#'+CONTAINER_ID);
}
