const assert = require('reassert');

module.exports = {getInitialProps};

async function getInitialProps({pageConfig, url, router, requestContext, isNodejs=false}) {
  assert.internal(url && url.constructor===Object && url.uri && url.uri.constructor===String && url.pathname && url.pathname.constructor===String, {url});
  console.log('uu',url);
  assert.internal([true,false].includes(isNodejs));
  assert.internal((requestContext||{}).constructor===Object);

  const routeArguments = router.getRouteArguments(url, pageConfig);
  assert.internal((routeArguments||{}).constructor===Object, {routeArguments});

  let initialProps = assemble(null);

  const addInitialProps__result = (
    pageConfig.addInitialProps &&
    await pageConfig.addInitialProps(initialProps)
  );

  initialProps = assemble(addInitialProps__result);

  return initialProps;

  function assemble(addInitialProps__result) {
    return ({
      isNodejs,
      url: url.uri,
      ...pageConfig,
      ...requestContext,
      ...url,
      ...routeArguments,
      ...addInitialProps__result,
      __sources: {
        pageConfig,
        addInitialProps__result,
        requestObject: requestContext,
        urlObject: url,
        routeArguments,
        isNodejs,
      },
    });
  }
}
