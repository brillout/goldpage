const assert = require('@brillout/reassert');

module.exports = {getInitialProps};

async function getInitialProps({pageConfig, url, router, requestObject, isNodejs=false}) {
  // `url` is missing iff static HTML rendering
  assert.internal(url.startsWith('http') || url.startsWith('/'));
  const parseUrl = require('@brillout/parse-url');
  const urlProps = parseUrl(url);
  assert.internal(urlProps.url===url);
  assert.internal(urlProps.pathname);

  assert.internal([true,false].includes(isNodejs));
  assert.internal((requestObject||{}).constructor===Object);

  const routeArguments = router.getRouteArguments(urlProps, pageConfig);
  assert.internal((routeArguments||{}).constructor===Object, {routeArguments});

  let initialProps = assemble(null);

  const addInitialProps__result = await retrieveInitialProps({pageConfig, initialProps});

  initialProps = assemble(addInitialProps__result);

  return initialProps;

  function assemble(addInitialProps__result) {
    return ({
      isNodejs,
      ...requestObject,
      ...pageConfig,
      ...urlProps.query,
      ...urlProps,
      ...routeArguments,
      ...addInitialProps__result,
      __sources: {
        pageConfig,
        addInitialProps: addInitialProps__result,
        requestObject,
        urlProps,
        routeArguments,
        isNodejs,
      },
    });
  }
}

async function retrieveInitialProps({pageConfig, initialProps}) {
  if( typeof window !== "undefined" && window._goldpage_initialProps ) {
    return window._goldpage_initialProps;
  }

  return (
    pageConfig.addInitialProps &&
    await pageConfig.addInitialProps(initialProps)
  );
}
