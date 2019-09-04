#!/usr/bin/env node

const assert = require('@brillout/reassert');
const path = require('path');
const config = require('@brillout/reconfig');
const ssr = require('./ssr');

const USAGE_PATH_ARG = './path/to/server/start.js';

(() => {
  const {isDev, serverEntryFile} = parseArguments();
  if( serverEntryFile ){
    ssr.serverEntryFile = serverEntryFile;
  }
  if( isDev ){
    require('./dev');
  } else {
    process.env.NODE_ENV = 'production';
    require('./build');
  }
})();

function parseArguments() {
  let args = process.argv.slice(2);

  assert_cli_usage(
    args.length===2 || args.length===1
  );
  assert_cli_usage(
    args.length===2 || config.goldpage.serverEntryFile,
    "Couldn't not find the server. Please add the server path argument `"+USAGE_PATH_ARG+"`.",
  );
  assert_cli_usage(
    ['build', 'dev'].includes(args[0]),
    "Unknown argument `"+args[0]+"`.",
  );

  let isDev = true;
  if( args[0]==='build' ){
    isDev = false;
  }
  args = args.slice(1);

  let serverEntryFile = null;
  if( args.length!==0 ){
    const serverEntrySpec = args[0];
    args = args.slice(1);
    serverEntryFile = serverEntrySpec;
    serverEntryFile = path.resolve(process.cwd(), serverEntryFile);
    try {
      serverEntryFile = require.resolve(serverEntryFile);
    } catch(err) {
      assert_cli_usage(
        false,
        "Could not find `"+serverEntrySpec+"`.",
      );
    }
  }

  assert_cli_usage(
    args.length===0,
  );
  assert.usage(
    isDev===false || process.env.NODE_ENV!=='production',
    "`process.env.NODE_ENV` should not be equal to `'production'` when running `goldpage dev`",
  );

  return {
    isDev,
    serverEntryFile,
  };
}

function assert_cli_usage(bool, failureReason) {
  assert.usage(
    bool,
    [
      "Wrong Goldpage CLI usage.",
      "  goldpage "+process.argv.slice(2).join(' '),
      ...(
        failureReason ? [failureReason] : []
      ),
      'Usage:',
      '  goldpage dev',
      '  goldpage dev '+USAGE_PATH_ARG,
      '  goldpage build',
      '  goldpage build '+USAGE_PATH_ARG,
    ]
    .join('\n')
  )
}
