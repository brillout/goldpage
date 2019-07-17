import React from 'react';
import assert_initialProps from './assert_initialProps';

export default Product;

function Product({product}) {
  return (
    <div>
      Product id: <b>{product.productId}</b><br/>
      Product name: <b>{product.name}</b><br/>
      Product description: <b>{product.description}</b><br/>
    </div>
  );
}
