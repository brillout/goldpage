const assert = require('@brillout/reassert');
const {renderPageHtml} = require('./common/renderPageHtml');
const parseUrl = require('@brillout/parse-url');

module.exports = getPageHtml;

async function getPageHtml({pageConfigs, url, htmlRender, router, requestObject}) {
    const urlProps = parseUrl(url);
    const pageMatches = (
        pageConfigs
        .filter(pageConfig => router.doesMatchUrl(urlProps, pageConfig))
    );

    if( pageMatches.length===0 ) {
        return null;
    }

    let pageConfig;
    if( pageMatches.length===1 ) {
      pageConfig = pageMatches[0];
    } else {
      const routes = pageMatches.map(pageConfig => pageConfig.route);
      const idx = determineMatch({routes, router, urlProps});
      pageConfig = pageMatches[idx];
      assert.internal(pageConfig);
    }

    assert.warning(
        !pageConfig.renderHtmlAtBuildTime,
        'Performance warning; dynamically rendering a static page at `'+url+'`.'
    );

    const html = await renderPageHtml({htmlRender, pageConfig, url, router, requestObject});

    return html;
}



// The most specific route should win:
// - `/a-static-route` over `/:org`
// - `/:org/:username` over `/:org`
// - `/hello` over `/:catch-all` or `*`

// Note that the catch-all route `/:catch-all` and the Wildcard route `*` are equivalent;
// having both at the same time doesn't make sense.

function determineMatch({routes, router, urlProps}) {
  assert.internal(routes.length>=2);

  routes = (
    routes
    .map((route, idx) => {
      assert.internal(route.constructor===String);
      const routeArguments = router.getRouteArguments(urlProps, {route});
      const numberOfArgs = Object.keys(routeArguments).length;
      return {
        route,
        idx,
        numberOfArgs,
      };
    })
  );

  // Return the static route, if there is one
  const idx = getStaticRoute({routes, router, urlProps});
  if( idx ) {
    return idx;
  }

  // Return the route that has the max number of parameters
  return getMaxRoute({routes, router, urlProps});
}

function getStaticRoute({routes, router, urlProps}) {
  const routes__static = routes.filter(({numberOfArgs}) => numberOfArgs===0);

  const {url} = urlProps;
  assert.internal(url.constructor===String);
  assert.internal(
    routes__static.length<=1,
    {routes, url},
    "Unexpected error; open a GitHub issue and copy this error in the GitHub issue."
  );

  if( routes__static.length===1 ) {
    return routes__static[0].idx;
  }

  assert.internal(routes__static.length===0);
  return null;
}

function getMaxRoute({routes, router, urlProps}) {
  let maxNumberOfArgs = 0;
  routes.forEach(({numberOfArgs}) => maxNumberOfArgs = Math.max(maxNumberOfArgs, numberOfArgs));
  assert.internal(maxNumberOfArgs>0);

  const routes__max_params = (
    routes
    .filter(({numberOfArgs}) =>
      numberOfArgs===maxNumberOfArgs)
  );
  assert.internal(routes__max_params.length>0);

  const {url} = urlProps;
  assert.internal(url.constructor===String);
  assert.usage(
    routes__max_params.length===1,
    "The following routes are conflicting:",
    routes__max_params.map(({route}) => route),
    "",
    "It doesn't make sense to have routes that always match the same URLs.",
    "Which seems to be the case with the above printed routes.",
    "Do your routes make sense?",
    "",
    "If your routes actually do make sense then open a GitHub issue and copy this error in the GitHub issue.",
    "",
    "All routes that match `"+url+"`:",
    routes,
  );

  return routes__max_params[0].idx;
}
