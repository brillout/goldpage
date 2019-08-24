export default fetchProduct;

async function fetchProduct(productId) {
  // Simulate network request
  await sleep(0.5);
  const product = {
    productId,
    name: 'Super vacuum cleaner',
    description: 'This the newest vacuum cleaner model from Prometheus Corp.',
    imageUrl: 'data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
  };
  return product;
}

function sleep(seconds) {
 let resolve;
 const p = new Promise(r => resolve=r);
 setTimeout(resolve, seconds*1000);
 return p;
}
