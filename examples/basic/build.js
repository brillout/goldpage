const ssr = require('goldssr');
const startServer = require('./server');

main();

async function main() {
  await ssr.build();
  await startServer();
}
