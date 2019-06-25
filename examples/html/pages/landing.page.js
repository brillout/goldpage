import React from 'react';
import logoUrl from './logo.png';

export default {
  // Adds <title>Welcome</title>
  title: 'Welcome',

  // Adds <meta name="description" content="A welcome page."/>
  description: 'A welcome page.',

  // Adds <script src="https://example.org/awesome-lib.js" type="text/javascript"></script>
  scripts: [
    'https://example.org/awesome-lib.js',
  ],

  // Adds <link href="https://example.org/awesome-lib.css" rel="stylesheet"/>
  styles: [
    'https://example.org/awesome-lib.css',
  ],

  // Adds <link rel="shortcut icon" href="/logo.hash_85dcecf7a6ad1f1ae4d590bb3078e4b1.png" />
  favicon: logoUrl,

  // ssr-coin uses the package @brillout/html (https://github.com/brillout/html) to generate HTML.
  // All @brillout/html's options are avaible over the page config

  route: '/',
  view: () => <h1>Welcome</h1>,
};
