import React from 'react';
import logoUrl from './logo.png';
import manifestUrl from './manifest.webmanifest';
import fetchProduct from './fetchProduct';

export default {
  view: () => <h1>Welcome</h1>,

  // ssr-coin uses the package @brillout/html (https://github.com/brillout/html) to generate HTML.
  // All @brillout/html's options are available over the page config.

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
    // All HTML in this array are added to `<head>`.
    // Make sure that the HTML you inject here is safe and escape all user generated content.
  ],

  body: [
    '<script>console.log("hello from injected script")</script>',
    // All HTML in this array are added to `<body>`.
    // Make sure that the HTML you inject here is safe and escape all user generated content.
  ],

  // You can generate HTML dynamically.
  // E.g. to have page meta tags generatetd upon loaded data.
  route: '/product/:productId',
  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    return {product};
  },
  title: ({product, productId}) => product.name+' ('+productId+')',
  head: ({product}) => [
    // Open Graph tags
    '<meta property="og:title" content="'+product.name+'">',
    '<meta property="og:description" name="description" content="'+product.description+'">',
  ],
};
