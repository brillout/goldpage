const ssr = require('goldssr');
const config = require('@brillout/reconfig');

main();

async function main() {
  let server;
  ssr.onBuild = async ({serverBuildEntry}) => {
    if( server ) {
      await server.stop();
    }
    delete require.cache[serverBuildEntry];
    server = await require(serverBuildEntry);
  };
  ssr.build();
}

/*
const ssr = require('goldssr');

async function main() {
  let server;

  ssr.onBuild = async ({serverEntryFile}) => {
    if( server ) {
      await server.stop();
    }
    server = await require_(serverEntryFile);
    assert.usage(
      server && server.stop,
      "The server entry `"+serverEntryFile+"` should return an object with a `stop()` function",
  };

  ssr.build();
}
*/
