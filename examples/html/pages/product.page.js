import React from 'react';
import fetchProduct from './fetchProduct';
import Product from './Product';

export default {
  route: '/product/:productId',

  // `ssr-coin` calls `addInitialProps()` before rendering `view` to HTML or to the DOM.
  // Alls props returned in `addInitialProps()` are passed to the `view`'s props.
  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    return {product};
  },

  // The `product` returned by `addInitialProps` is available to `view`.
  view: initialProps => {
    const {product} = initialProps;
    return (
      <Product product={product}/>
    );
  },

  // The initial props are also available for generating HTML code.
  title: initialProps => {
    const {product, productId} = initialProps;
    return (
      product.name+' ('+productId+')'
    );
  },
};
