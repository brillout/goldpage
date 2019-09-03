import React from 'react';
import fetchProduct from './fetchProduct';
import getHtmlOptions from './getHtmlOptions';
import assert_initialProps from './assert_initialProps';
import Product from './Product';

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
    // More in a section below.
    renderToDom: true, // (default value)
    renderToHtml: false, // (default value)
    renderHtmlAtBuildTime: false, // default value

    // The definition of `getHtmlOptions` is shown in a section below
    // and shows all HTML configs.
    ...getHtmlOptions()
  };
}

async function addInitialProps(initialProps) {
  // The definition of `assert_initialProps` is shown in a section below
  // and shows all `initialProps`.
  assert_initialProps(initialProps);

  const {productId} = initialProps;

  const product = await fetchProduct(productId);

  return {product};
}
