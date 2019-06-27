import React from 'react';
import fetchProduct from './fetchProduct';
import assert from '@brillout/reassert';
import manifestUrl from './manifest.webmanifest';

const pageConfig = getPageConfig();
export default pageConfig;

function getPageConfig() {
  return {
    // The url of the page.
    // The routing is done by `path-to-regexp` (https://github.com/pillarjs/path-to-regexp).
    route: '/products/:productId',

    // You can use `addInitialProps` to load async data.
    addInitialProps: async initialProps => {
      // See the definition of `assert_initialProps` for
      // a full referance of what `initialProps` contains.
      assert_initialProps(initialProps);

      const {productId} = initialProps;
      const product = await fetchProduct(productId);

      return {product};
    },

    // The content of your page.
    // It is rendered by the render plugin you installed.
    view: initialProps => {
      assert_initialProps(initialProps);

      // Props returned by `addInitialProps` are available to `view`
      assert(initialProps.product);

      return (
        <div>
          Product id: <b>{initialProps.productId}</b><br/>
          Product name: <b>{initialProps.product.name}</b><br/>
          Product description: <b>{initialProps.product.description}</b><br/>
          { initialProps.productColor && (
            <span>Product color: <b>{initialProps.productColor}</b></span>
          )
          }
        </div>
      );
    },

    // Control when the page is rendered, see "!VAR PERFORMANCE_TUNING".
    doNotRenderInBrowser: false,
    renderHtmlAtBuildTime: false,

    ...getHtmlOptions()
  };
}

function assert_initialProps(initialProps){
  const {
    // Route arguments
    productId,

    // Query paramaters
    productColor,

    // Whether the code is being run in Node.js or in the browser
    isNodejs,

    // URL props
    url,
    origin,
    protocol,
    hostname,
    port,
    pathname,
    query,
    queryString,
    hash,

    // The request object is available here.
    // The page config as well.
    // See below.
    ...initialProps__rest
  } = initialProps;

  assert.internal(url.startsWith('http'));
  if( url==='http://localhost:3000/products/123?productColor=blue#reviews' ){
    // Url params
    assert(productId==='123');
    assert(productColor==='blue');

    // Url props
    assert(origin==='http://localhost:3000');
    assert(protocol==='http:');
    assert(hostname==='localhost');
    assert(port==='3000');
    assert(pathname==='/products/123');
    assert(query.productColor==='blue');
    assert(queryString==='?productColor=blue');
    assert(hash==='#reviews');
  }

  assert([true, false].includes(isNodejs));

  // The server framework's request object is also available.
  // For example, to get the HTTP request headers `req.headers`:
  const {headers} = initialProps__rest;

  // The page config is available over `initialProps`
  assert(initialProps__rest.route);
  assert(initialProps__rest.view);
  Object.keys(pageConfig).forEach(pageConfigProp => {
    assert(pageConfigProp in initialProps__rest);
  });


  // Since all props are flat-merged into one object, there can be conflicts.
  // In case of a prop name conflict, you can access all props over `__sources`.
  const {__sources} = initialProps;
  // Props returned by `addInitialProps`
  assert(__sources.addInitialProps__result===null || __sources.addInitialProps__result.product);

  // The request object returned by your server framework (Express / Koa / Hapi / ...)
  assert(isNodejs===false || __sources.requestObject);
  assert(isNodejs===false || __sources.requestObject.headers);

  // The url props returned by `@brillout/parse-url` (https://github.com/brillout/parse-url)
  assert(__sources.urlProps);

  // The route params
  assert(__sources.routeArguments);
  assert(__sources.routeArguments.productId);

  // The page config
  assert(__sources.pageConfig);
  assert(__sources.pageConfig.route);
  assert(__sources.pageConfig.view);

  // Whether the code is running on the server or in the browser.
  assert(__sources.isNodejs===isNodejs);
}

function getHtmlOptions() {
  // ssr-coin uses `@brillout/html` (https://github.com/brillout/html) to generate HTML.
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

    // <link rel="icon" href="https://raw.githubusercontent.com/ghuser-io/ghuser.io/master/docs/logo_square.png" />
 // favicon: require('./path/to/logo.png'),

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
