const assert = require('@brillout/reassert');
const {renderPageHtml} = require('./common/renderPageHtml');
const parseUrl = require('@brillout/parse-url');

module.exports = getPageHtml;

async function getPageHtml({pageConfigs, url, htmlRender, router, requestObject}) {
    const pageConfig = getMatchingPageConfig({pageConfigs, router, url});

    if( pageConfig===null ){
      return null;
    }

    assert.warning(
        !pageConfig.renderHtmlAtBuildTime,
        'Performance warning; dynamically rendering a static page at `'+url+'`.'
    );

    const html = await renderPageHtml({htmlRender, pageConfig, url, router, requestObject});

    return html;
}

function getMatchingPageConfig({pageConfigs, router, url}) {
  assert_logic({router});

  const routes = pageConfigs.map(({route}) => route);
  const idx = getMatchingRoute({routes, router, url});

  if( idx===null ) return null;

  assert.internal(idx>=0);
  const pageConfig = pageConfigs[idx];
  assert.internal(pageConfig);

  return pageConfig;
}

function assert_logic({router}) {
  // The most specific route should win:
  [
    [['*', '/'], '/', 1],
    [['*', '/a-static-route'], '/a-static-route', 1],
    [['/:param', '/a-static-route'], '/a-static-route', 1],
    [['/:p1/:p2', '/a-static/route'], '/a-static/route', 1],
    [['/:p1/:p2', '/:p1'], '/reframejs', 1],
    [['/:p1', '/:p1/:p2'], '/reframejs/goldpage', 1],
    [['/:p1/:p2', '*'], '/reframejs', 1],
    [['*', '/:p1/:p2'], '/reframejs/goldpage', 1],
    [['/:p1/:p2', '/reframejs/:p2'], '/reframejs/goldpage', 1],
    [['/:p1/goldpage', '/reframejs/:p2'], '/reframejs/goldpage', 0],
  ].forEach(([routes, url, idx]) => {
    assert.internal(getMatchingRoute({routes, router, url})===idx, {routes, url, idx});
  });
}

function getMatchingRoute({routes, router, url}) {
  const urlProps = parseUrl(url);

  const routes_matched = (
    routes
    .map((route, idx) => {
      const isMatch = router.doesMatchUrl(urlProps, {route});

      assert.internal(route.constructor===String);
      const routeArguments = router.getRouteArguments(urlProps, {route});

      const numberOfArgs = Object.keys(routeArguments||{}).length;

      const numberOfParts = route.split('/').filter(Boolean).length || 1;
      assert.internal(numberOfParts>=1, {route});

      const numberOfStaticParts = numberOfParts - numberOfArgs;
      assert.internal(
        numberOfStaticParts>=0,
        {routeArguments},
        {route, numberOfStaticParts, numberOfParts, numberOfArgs},
      );

      return {
        isMatch,
        route,
        idx,
        numberOfParts,
        numberOfStaticParts,
        numberOfArgs,
      };
    })
    .filter(({isMatch}) => isMatch)
    .sort((route1, route2) => {
      if( route1.numberOfStaticParts !== route2.numberOfStaticParts ) {
        return route2.numberOfStaticParts - route1.numberOfStaticParts;
      }
      return route2.numberOfParts - route1.numberOfParts;
    })
  );

  if( routes_matched.length===0 ) {
    return null;
  }

  return routes_matched[0].idx;
}
