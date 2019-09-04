import manifestUrl from './manifest.webmanifest';

export default getHtmlOptions;

function getHtmlOptions() {
  // Goldpage uses `@brillout/html` (https://github.com/brillout/html) to generate HTML.
  // All `@brillout/html` options are available over the page config.

  return {
    // Adds <title>Title shown in browser tab.</title>
    title: 'Title shown in browser tab.',
    /* Altneratively:
    title: initialProps => {
      assert_initialProps(initialProps);
      // Props returned by `addInitialProps` are also available to the `@brillout/html` options
      return initialProps.product.product.name;
    },
    */

    // <meta name="description" content="Description of page shown in search engines.">
    description: 'Description of page shown in search engines.',
    /*
    // Not only `title` but all options can be dynmically generated with a function
    description: initialProps => initialProps.product.product.name,
    */

    // <link rel="shortcut icon" href="/logo.hash_85dcecf7a6ad1f1ae4d590bb3078e4b1.png">
    favicon: require('./logo.png'),

    head: [
      '<link rel="manifest" href="'+manifestUrl+'">',
    ],
    body: [
      '<script>console.log("hello from injected script")</script>',
    ],
    /* Again, we can use a function to dynammically generate HTML.
    body: initialProps => {
      return [
        '<script>console.log("hello from '+initialProps.product.productname+' page.")</script>',
      ];
    },
    */

    // You can fully control the HTML:
    html: (
`<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    !HEAD
  </head>
  <body>
    !BODY
  </body>
</html>
`
    ),
    /* Dynammically as well:
    html: initialProps => '...',
    */

    // See https://github.com/brillout/html for the list of all options
  };
}

