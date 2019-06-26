import React from 'react';
import logoUrl from './logo.png';
import manifestUrl from './manifest.webmanifest';
import fetchProduct from './fetchProduct';

export default {
  route: '/product/:productId',
  view: () => <h1>Welcome</h1>,

  // ssr-coin uses the package @brillout/html (https://github.com/brillout/html) to generate HTML.
  // All @brillout/html's options are avaible over the page config

  // Adds <title>Welcome</title>
  title: 'Welcome',

  // Adds <link rel="shortcut icon" href="/logo.hash_85dcecf7a6ad1f1ae4d590bb3078e4b1.png">
  favicon: logoUrl,

  // Adds <meta name="description" content="A welcome page.">
  description: 'A welcome page.',

  // Adds <script src="https://example.org/awesome-lib.js" type="text/javascript"></script>
  scripts: [
    'https://example.org/awesome-lib.js',
  ],

  // Adds <link href="https://example.org/awesome-lib.css" rel="stylesheet">
  styles: [
    'https://example.org/awesome-lib.css',
  ],

  // Adds <link rel="manifest" href="/manifest.hash_bb5e0038d1d480b7e022aaa0bdce25a5.webmanifest">
  head: [
		'<link rel="manifest" href="'+manifestUrl+'"/>',
    // HTML in this array is added to <head>
    // Make sure that the HTML you inject is safe; escape all user generated content.
  ],

  body: [
    '<script>console.log("hello from injected script")</script>',
    // HTML in this array is added to <body>
    // Make sure that the HTML you inject is safe; escape all user generated content.
  ],

  // You can also dynamically generate HTML.
  // You can use this to have page meta tags generatetd upon loaded data.
  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    console.log(product);
    return {product};
  },
  title: ({product, productId}) => product.name+' ('+productId+')',
  head: ({product}) => [
    // Open Graph tags
    '<meta property="og:title" content="'+product.name+'">',
    '<meta property="og:description" name="description" content="'+product.description+'">',
  ],
};
