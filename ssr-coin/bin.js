#!/usr/bin/env node

const assert = require('@brillout/reassert');

(() => {
  const {isDev, serverEntryFile} = parseArguments();
  if( serverEntryFile ){
    const ssr = require('./ssr');
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

  assert_usage(
    args.length===2,
  );
  assert_usage(
    ['build', 'dev'].includes(args[0]),
    "Unknown argument `"+args[0]+"`.",
  );

  let isDev = true;
  if( args[0]==='build' ){
    args = args.slice(1);
    isDev = false;
  }

  let serverEntryFile = null;
  if( args.length!==0 ){
    const serverEntrySpec = args[0];
    args = args.slice(1);
    try {
      serverEntryFile = require.resolve(serverEntrySpec);
    } catch(err) {
      assert_usage(
        false,
        "Could not find `"+serverEntrySpec+"`.",
      );
    }
  }

  assert_usage(
    args.length===0,
  );
  assert.usage(
    isDev===false || process.env.NODE_ENV!=='production',
    "`process.env.NODE_ENV` should not be equal to `'production'` when running `ssr-coin dev`",
  );

  return {
    isDev,
    serverEntryFile,
  };
}

function assert_usage(bool, failureReason) {
  assert.usage(
    bool,
    [
      "Wrong `ssr-coin` CLI usage.",
      ...(
        failureReason ? [failureReason] : []
      ),
      'Usage:',
      '  ssr-coin dev',
      '  ssr-coin dev ./path/to/server/start.js',
      '  ssr-coin build',
      '  ssr-coin build ./path/to/server/start.js',
    ]
    .join('\n')
  )
}
