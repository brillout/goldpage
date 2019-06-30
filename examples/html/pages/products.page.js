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
    route: '/products/:productId',

    // Add additional inital props, for example data loaded from an API.
    // `addInitialProps` can be async and `ssr-coin` awaits `addInitialProps` before
    // rendering `view` to the DOM / HTML.
    addInitialProps,

    // The content of your page.
    // `view` is rendered by the render plugin you installed.
    view,

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

function view(initialProps) {
  assert_initialProps(initialProps);

  // The props returned by `addInitialProps` are available to `view`.
  const {product} = initialProps;

  return (
    <div>
      Product id: <b>{initialProps.productId}</b><br/>
      Product name: <b>{initialProps.product.name}</b><br/>
      Product description: <b>{initialProps.product.description}</b><br/>
    </div>
  );
}
