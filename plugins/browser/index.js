const browserInitFile = require.resolve('./browserInit');
const hydratePageFile = require.resolve('./hydratePage');
const config = require('@brillout/reconfig');

config.GoldSSR.browserInitFile = browserInitFile;
config.GoldSSR.browserInitFunctions = config.GoldSSR.browserInitFunctions || [];
config.GoldSSR.browserInitFunctions.push(
  {
    name: 'hydratePage',
    initFunctionFile: hydratePageFile,
    doNotInclude: ({pageConfig}) => !!pageConfig.doNotRenderInBrowser,
    // -50 is fairly aggressive to ensure that hydration is
    // one of the first thing that happens in the browser
    executionOrder: -50,
    browserConfigsNeeded: [
      'renderPageToDom',
      'renderToDom',
      'pageConfig',
      'router',
    ],
  },
);
