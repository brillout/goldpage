const browserInitFile = require.resolve('./browserInit');
const hydratePageFile = require.resolve('./hydratePage');
const config = require('@brillout/reconfig');

config.ssrCoin.browserInitFile = browserInitFile;
config.ssrCoin.browserInitFunctions = config.ssrCoin.browserInitFunctions || [];
config.ssrCoin.browserInitFunctions.push(
  {
    name: 'hydratePage',
    initFunctionFile: hydratePageFile,
    doNotInclude: ({pageConfig}) => pageConfig.renderToDom===false,
    // -50 is fairly aggressive to ensure that hydration is
    // one of the first thing that happens in the browser
    executionOrder: -50,
    browserConfigsNeeded: [
      'renderPageToDom',
      'domRender',
      'pageConfig',
      'router',
    ],
  },
);
