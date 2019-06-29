import React from 'react';
import manifestUrl from './manifest.webmanifest';
import fetchProduct from './fetchProduct';
import getHtmlOptions from './getHtmlOptions';
import assert_initialProps from './assert_initialProps';

const pageConfig = getPageConfig();
export default pageConfig;

function getPageConfig() {
  return {
    // The url of the page.
    // The routing is done by `path-to-regexp` (https://github.com/pillarjs/path-to-regexp).
    route: '/products/:productId',

    // You can use `addInitialProps` to load async data.
    addInitialProps: async initialProps => {
      // See the definition of `assert_initialProps` for
      // a full referance of what `initialProps` contains.
      assert_initialProps(initialProps);

      const {productId} = initialProps;
      const product = await fetchProduct(productId);

      return {product};
    },

    // The content of your page.
    // It is rendered by the render plugin you installed.
    view: initialProps => {
      assert_initialProps(initialProps);

      // Props returned by `addInitialProps` are available to `view`
      const {product} = initialProps;

      return (
        <div>
          Product id: <b>{initialProps.productId}</b><br/>
          Product name: <b>{initialProps.product.name}</b><br/>
          Product description: <b>{initialProps.product.description}</b><br/>
          { initialProps.productColor && (
            <span>Product color: <b>{initialProps.productColor}</b></span>
          )
          }
        </div>
      );
    },

    // Control when the page is rendered, see "!VAR PERFORMANCE_TUNING".
    doNotRenderInBrowser: false,
    renderHtmlAtBuildTime: false,

    ...getHtmlOptions()
  };
}
