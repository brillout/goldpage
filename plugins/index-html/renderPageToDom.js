const browserConfig = require('@brillout/browser-config');
const CONTAINER_ID = require('./CONTAINER_ID');

module.exports = renderPageToDom;

async function renderPageToDom({pageConfig, initialProps}) {
  await browserConfig.renderToDom({pageConfig, initialProps, CONTAINER_ID});
}
