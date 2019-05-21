const ssr = require('goldssr');

Object.assign(ssr, {
  pagesDir: __dirname+'/pages',
  log: {
    buildingText: 'Building pages...',
    builtText: 'Pages built',
    showLoadingSpinner: true,
    verbose: false,
  },
  serverEntryFile: __dirname+'/server',
});
