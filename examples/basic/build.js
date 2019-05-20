const ssr = require('goldssr');
const startServer = require('./server');

ssr.pagesDir = __dirname+'/pages';
ssr.log = {
  buildingText: 'Building pages...',
  builtText: 'Pages built',
  showLoadingSpinner: false,
  verbose: false,
};

main();

async function main() {
  await ssr.build();
  await startServer();
}
