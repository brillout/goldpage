import React from 'react;

export default Product;

function Product(initialProps) {
  assert_initialProps(initialProps);

  const {product} = initialProps;

  return (
    <div>
      Product id: <b>{initialProps.productId}</b><br/>
      Product name: <b>{initialProps.product.name}</b><br/>
      Product description: <b>{initialProps.product.description}</b><br/>
    </div>
  );
}
