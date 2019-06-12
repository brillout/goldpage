const ssr = require('./ssr');
const require_ = require('@brillout/require-gold');
const assert = require('@brillout/reassert');
const ProjectFiles = require('@brillout/project-files');
const {fork} = require('child_process');
const kill = require('kill-port');

assert.usage(
  process.env.NODE_ENV!=='production',
  "`dev` shouldn't be run with `process.env.NODE_ENV==='production'`.",
);

let server;
ssr.onBuild = ({serverBuildEntry, serverEntryFile}) => {
  if( !serverBuildEntry ){
    return;
  }
  const {PORT} = process.env;
  if( PORT ){
    return restart__byPort({serverBuildEntry, PORT});
  } else {
    return restart__byExport({serverBuildEntry, serverEntryFile});
  }
}

ssr.build();

async function restart__byExport({serverBuildEntry, serverEntryFile}) {
  console.log('by-export');
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

async function restart__byPort({serverBuildEntry, PORT}) {
  console.log('by-port');
  await kill(process.env.PORT);
  const subprocess = fork(serverBuildEntry, {detached: false, stdio: 'inherit'});
}
