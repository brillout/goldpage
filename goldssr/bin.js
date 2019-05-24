#!/usr/bin/env node

const assert = require('@brillout/reassert');
const arg = process.argv.slice(2)[0];

(() => {
  if( arg==='dev' ){
    assert.usage(
      process.env.NODE_ENV!=='production',
    );
    require('./dev');
    return;
  }
  if( arg==='build' ){
    process.env.NODE_ENV='production';
    require('./build');
    return;
  }
  assert.usage(
    false,
    "Unknown argument `"+arg+"`."
  );
})();
