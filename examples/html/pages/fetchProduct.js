export default fetchProduct;

async function fetchProduct(productId) {
  // Simulate network request
  await sleep(0.5);
  const product = {
    productId,
    name: 'Super vacuum cleaner',
    description: 'This the newest vacuum cleaner model from Prometheus Corp.',
  };
  return product;
}

function sleep(seconds) {
 let resolve;
 const p = new Promise(r => resolve=r);
 setTimeout(resolve, seconds*1000);
 return p;
}
