const assert = require('reassert');
const ssr = require('goldssr');

assert.usage(
  ['development', undefined, 'production'].includes(process.env.NODE_ENV)
);

module.exports = ssr.build();
