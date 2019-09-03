const domRender = require.resolve('./domRender');
const htmlRender = require.resolve('./htmlRender');

const config = require('@brillout/reconfig');

Object.assign(
  config.ssrCoin,
  {
    htmlRender,
    domRender,
  },
);
