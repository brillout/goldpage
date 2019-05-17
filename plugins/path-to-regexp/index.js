const routerFile = require.resolve('./router');
const {config, AppendArray} = require('@brillout/reconfig');

Object.assign(
  config,
  {
    routerFile,
    browserConfigs: AppendArray(['routerFile']),
  },
);
