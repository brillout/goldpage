#!/usr/bin/env node

const assert = require('@brillout/reassert');
const path = require('path');
const config = require('@brillout/reconfig');
const ssr = require('./ssr');
const {colorError} = require('@brillout/cli-theme');

const USAGE_PATH_ARG = './path/to/server/start.js';

(() => {
  const {silent, isDev, serverEntryFile} = parseArguments();
  let isBuildingServer = false;
  if( serverEntryFile ){
    ssr.serverEntryFile = serverEntryFile;
    isBuildingServer = true;
  }
  if( isDev ){
    const dev = require('./dev');
    dev({isBuildingServer, silent});
  } else {
    process.env.NODE_ENV = 'production';
    const build = require('./build');
    build({isBuildingServer, silent});
  }
})();

function parseArguments() {
  const {cliOptions, cliArgs} = parseCammndLineString();

  const command = cliArgs[0];
  assert_cli_usage(
    cliArgs.length>=1
  );
  assert_cli_usage(
    ['build', 'dev'].includes(command),
    "Unknown command `"+command+"`.",
  );
  let isDev = true;
  if( command==='build' ){
    isDev = false;
  }
  assert.usage(
    isDev===false || process.env.NODE_ENV!=='production',
    "`process.env.NODE_ENV` should not be equal to `'production'` when running `goldpage dev`",
  );

  assert_cli_usage(
    cliArgs.length===2 || cliArgs.length===1
  );
  /*
  assert_cli_usage(
    cliArgs.length===2 || config.goldpage.serverEntryFile,
    "Could not find the server. Please add the server path argument `"+USAGE_PATH_ARG+"`.",
  );
  */

  let serverEntryFile = null;
  const serverEntrySpec = cliArgs[1];
  if( serverEntrySpec ){
    serverEntryFile = serverEntrySpec;
    serverEntryFile = path.resolve(process.cwd(), serverEntryFile);
    try {
      serverEntryFile = require.resolve(serverEntryFile);
    } catch(err) {
      console.error(err);
      console.error('');
      assert_cli_usage(
        false,
        "Could not find `"+serverEntrySpec+"`: No file found at `"+serverEntryFile+"`.",
      );
    }
  }

  return {
    ...cliOptions,
    isDev,
    serverEntryFile,
  };
}
function parseCammndLineString() {
  const cliArgs = [];
  let silent = false;
  process.argv.slice(2)
  .forEach(arg => {
    if( arg.startsWith('-') ) {
      if( arg==='--silent' ){
        silent = true;
        return;
      }
      assert_cli_usage(false, 'Unkown option `'+arg+'`');
    } else {
      cliArgs.push(arg);
    }
  });
  return {cliOptions: {silent}, cliArgs};
}


function assert_cli_usage(bool, failureReason) {
  assert.usage(
    bool,
    [
      "Wrong Goldpage CLI usage.",
      "",
      "  goldpage "+process.argv.slice(2).join(' '),
      ...(
        failureReason ? ['',colorError(failureReason)] : []
      ),
      "",
      'Usage:',
      '  goldpage dev [--silent]',
      '  goldpage dev '+USAGE_PATH_ARG+' [--silent]',
      '  goldpage build [--silent]',
      '  goldpage build '+USAGE_PATH_ARG+' [--silent]',
    ]
    .join('\n')
  )
}
