const ssr = require('./ssr');
const require_ = require('@brillout/require-gold');
const assert = require('@brillout/reassert');
const ProjectFiles = require('@brillout/project-files');
const kill = require('kill-port');

assert.usage(
  process.env.NODE_ENV!=='production',
  "`dev` shouldn't be run with `process.env.NODE_ENV==='production'`.",
);

let server;
ssr.onBuild = args => {
  const {PORT} = process.env;
  const {userScript} = new ProjectFiles();
  const {isFirstBuild} = args;
  assert.internal([true, false].includes(isFirstBuild));
  if( PORT && userScript ){
    if( args.isFirstBuild!==false ){
      return;
    }
    return restart__byPort(PORT, userScript);
  } else {
    return restart__byExport(args);
  }
}

ssr.build();

async function restart__byExport({serverBuildEntry, serverEntryFile}) {
  if( server ) {
    if( server.close ){
      await server.close();
    } else if( server.stop ){
      await server.stop();
    }
  }
  server = await require_(serverBuildEntry, {skipCache: true});
  assert.usage(
    server && (server.close || server.stop),
    "`"+serverEntryFile+"` should return an object with a `close()` or `stop()` function",
  );
}

async function restart__byPort(PORT, userScript) {
  console.log('killing');
  await kill(process.env.PORT);
  console.log('killed');
  require_(userScript);
  console.log('resterated '+userScript);
}
