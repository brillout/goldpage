import React from 'react';
import fetchProduct from './fetchProduct';
// Definition of `getHtmlOptions` is shown below.
import getHtmlOptions from './getHtmlOptions';
// Definition of `assert_initialProps` is shown below.
import assert_initialProps from './assert_initialProps';

export default getPageConfig();

function getPageConfig() {
  return {
    // The url of the page.
    // The routing is done by `path-to-regexp` (https://github.com/pillarjs/path-to-regexp).
    route: '/product-details/:productId',

    // Add additional inital props, for example data loaded from an API.
    // `addInitialProps` can be async and `ssr-coin` awaits `addInitialProps` before
    // rendering `view` to the DOM / HTML.
    addInitialProps,

    // The content of your page.
    // `view` is rendered by the render plugin you installed.
    view: Product,

    // Control when the page is rendered.
    // See section "Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`".
    doNotRenderInBrowser: false,
    renderHtmlAtBuildTime: false,

    ...getHtmlOptions()
  };
}

async function addInitialProps(initialProps) {
  // See the definition of `assert_initialProps` for
  // a full referance of what `initialProps` contains.
  assert_initialProps(initialProps);

  const {productId} = initialProps;
  const product = await fetchProduct(productId);
  return {product};
}
