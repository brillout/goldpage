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
              'renderToDom',
              'pageConfig',
              'router',
          ],
      },
    ]),
  },
);

/*
module.exports = {
    ejectables: [
        {
            name: 'browser',
            description: 'Eject the browser initialization code.',
            actions: [
                {
                    targetDir: 'browser/',
                    configIsFilePath: true,
                    configPath: 'browserInitFile',
                },
            ],
        },
        {
            name: 'browser-hydrate',
            description: 'Eject the code that orchestrates the hydration of the page.',
            actions: [
                {
                    targetDir: 'browser/',
                    configPath: 'browserInitFunctions',
                    configIsList: true,
                    listElementKeyProp: 'name',
                    listElementKey: 'hydratePage',
                    newConfigValue: ({copyCode, oldConfigValue}) => ({
                        ...oldConfigValue,
                        initFunctionFile: copyCode(oldConfigValue.initFunctionFile),
                    }),
                }
            ],
        },
    ],
};
*/
