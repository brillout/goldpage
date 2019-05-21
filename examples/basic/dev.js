main();

async function main() {
  await require('./build');
  await require('./server');
}
