import assert from '@brillout/reassert';

export default assert_initialProps;

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

  // The page config is available at `initialProps`
  assert(initialProps__rest.route);
  assert(initialProps__rest.view);

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
