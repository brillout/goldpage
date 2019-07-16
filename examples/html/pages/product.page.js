import React from 'react';
import fetchProduct from './fetchProduct';
import Product from './Product';

export default {
  route: '/product/:productId',

  // `ssr-coin` calls `addInitialProps()` before rendering `view` to HTML or to the DOM.
  // Everything returned in `addInitialProps()` is passed to the `view`'s prop.
  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    return {product};
  },

  // The `product` returned by `addInitialProps` is available to `view`
  view: initialProps => {
    const {product} = initialProps;
    return (
      <Product product={product}/>
    );
  },

  // The initial props are also available when generating HTML
  title: initialProps => {
    const {product, productId} = initialProps;
    return (
      product.name+' ('+productId+')'
    );
  },
};

