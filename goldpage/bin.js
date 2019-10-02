#!/usr/bin/env node

const assert = require('@brillout/reassert');
const path = require('path');
const config = require('@brillout/reconfig');
const ssr = require('./ssr');
const {colorError} = require('@brillout/cli-theme');

const USAGE_PATH_ARG = './path/to/server/start.js';

(() => {
  const {silent, isDev, serverEntryFile} = parseArguments();
  if( serverEntryFile ){
    ssr.serverEntryFile = serverEntryFile;
  }
  if( isDev ){
    const dev = require('./dev');
    dev({serverEntryFile, silent});
  } else {
    process.env.NODE_ENV = 'production';
    const build = require('./build');
    build({serverEntryFile, silent});
  }
})();

function parseArguments() {
  let args = process.argv.slice(2);

  const {silent, argsExtracted} = extractOptions(args);
  args = argsExtracted;

  assert_cli_usage(
    args.length===2 || args.length===1
  );
  /*
  assert_cli_usage(
    args.length===2 || config.goldpage.serverEntryFile,
    "Could not find the server. Please add the server path argument `"+USAGE_PATH_ARG+"`.",
  );
  */
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
      console.error(err);
      console.error('');
      assert_cli_usage(
        false,
        "Could not find `"+serverEntrySpec+"`: No file found at `"+serverEntryFile+"`.",
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
    silent,
    isDev,
    serverEntryFile,
  };
}

function extractOptions(args) {
  const argsExtracted = [];
  let silent = false;
  args.forEach(arg => {
    if( arg.startsWith('-') ) {
      if( arg==='--silent' ){
        silent = true;
        return;
      }
      assert_cli_usage(false, 'Unkown option `'+arg+'`');
    } else {
      argsExtracted.push(arg);
    }
  });
  return {silent, argsExtracted};
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
