const assert = require('reassert');

module.exports = {getInitialProps};

async function getInitialProps({pageConfig, url, router, requestContext, isNodejs=false}) {
  assert.internal(url && url.constructor===Object && url.uri && url.uri.constructor===String && url.pathname && url.pathname.constructor===String, {url});
  assert.internal([true,false].includes(isNodejs));
  assert.internal((requestContext||{}).constructor===Object);

  const routeArguments = router.getRouteArguments(url, pageConfig);
  assert.internal((routeArguments||{}).constructor===Object, {routeArguments});

  let initialProps = assemble(null);

  const loadedProps = (
    pageConfig.getInitialProps &&
    await pageConfig.getInitialProps(initialProps)
  );

  initialProps = assemble(loadedProps);

  return initialProps;

  function assemble(loadedProps) {
    return ({
      isNodejs,
      url: url.uri,
      ...pageConfig,
      ...requestContext,
      ...url,
      ...routeArguments,
      ...loadedProps,
      __sources: {
        pageConfig,
        loadedProps,
        requestContext,
        url,
        routeArguments,
        isNodejs,
      },
    });
  }
}
