const ssr = require('goldssr');

ssr.pagesDir = __dirname+'/pages';
ssr.log = {
  buildingText: 'Building pages...',
  builtText: 'Pages built',
  showLoadingSpinner: true,
  verbose: false,
};

