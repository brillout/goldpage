const assert = require('@brillout/reassert');

module.exports = {getInitialProps};

async function getInitialProps({pageConfig, url, router, requestObject, isNodejs=false}) {
  // `url` is missing iff static HTML rendering
  assert.internal(url.startsWith('http') || url.startsWith('/'));
  const parseUrl = require('@brillout/parse-url');
  const urlPros = parseUrl(url);
  assert.internal(urlPros.url===url);
  assert.internal(urlPros.pathname);

  assert.internal([true,false].includes(isNodejs));
  assert.internal((requestObject||{}).constructor===Object);

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
      ...requestObject,
      ...pageConfig,
      ...urlProps,
      ...routeArguments,
      ...addInitialProps__result,
      __sources: {
        pageConfig,
        addInitialProps__result,
        requestObject,
        urlProps,
        routeArguments,
        isNodejs,
      },
    });
  }
}
