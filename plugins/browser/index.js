const browserInitFile = require.resolve('./browserInit');
const hydratePageFile = require.resolve('./hydratePage');

const {config, AppendArray} = require('@brillout/reconfig');

Object.assign(
  config,
  {
    browserInitFile,
    browserInitFunctions: AppendArray([
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
    ]),
  },
);
