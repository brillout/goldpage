const ssr = require('./ssr');
const assert = require('@brillout/reassert');

assert.warning(
  process.env.NODE_ENV==='production',
  "You are running `build` with `process.env.NODE_ENV!=='production'`.",
  "You may want to run `dev` instead or set `process.env.NODE_ENV` to `'production'`.",
);

ssr.build();
