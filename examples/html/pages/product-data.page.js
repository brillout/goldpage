import React from 'react';
import fetchProduct from './fetchProduct';
import Product from './Product';

export default {
  route: '/product-data/:productId',

  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    return {product};
  },

  view: initialProps => {
    const {product} = initialProps;
    return (
      <Product product={product}/>
    );
  },

  head: initialProps => {
    const {product, productId} = initialProps;
    return [
      '<meta property="og:title"              content="'+product.name+' ('+productId+')" />',
      '<meta property="og:description"        content="'+product.description+'" />',
      '<meta property="og:image"              content="'+product.imageUrl+'" />',
    ];
  },

  renderToDom: true,
  renderToHtml: false,

  // We compute the page's meta data at request-time.
  renderHtmlAtBuildTime: false,
};

