const browserConfig = require('@brillout/browser-config');
const CONTAINER_ID = require('./CONTAINER_ID');
const assert = require('@brillout/reassert');

module.exports = renderPageToDom;

async function renderPageToDom({initialProps}) {
  assert.internal(initialProps);

  await browserConfig.renderToDom({
    page: initialProps.__sources.pageConfig,
    CONTAINER_ID,
    initialProps,
  });
}
