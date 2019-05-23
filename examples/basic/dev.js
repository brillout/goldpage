require('goldssr');
const config = require('@brillout/reconfig');
const runBuild = require(config.GoldSSR.runBuildFile);

main();

async function main() {
  let server;
  runBuild.onBuildDone = async () => {
    if( server ) {
      await server.stop();
    }
    const serverEntryFilepath = __dirname+'/.build/nodejs/server';
    delete require.cache[require.resolve(serverEntryFilepath)];
    server = await require(serverEntryFilepath);
  };
  require('./build');
}

/*
const ssr = require('goldssr');

async function main() {
  let server;
  ssr.build.onBuildSuccess = async ({serverEntryFile}) => {
    if( server ) {
      await server.stop();
    }
    server = await require(serverEntryFile);
  };
  ssr.build();
}
*/
