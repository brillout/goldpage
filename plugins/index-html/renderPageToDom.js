const browserConfig = require('@brillout/browser-config');
const CONTAINER_ID = require('./CONTAINER_ID');

async function renderPageToDom({pageConfig, initialProps}) {
  await browserConfig.renderToDom({pageConfig, initialProps, CONTAINER_ID});
}
