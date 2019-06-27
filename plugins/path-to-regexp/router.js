const assert = require('@brillout/reassert');
const assert_todo = assert.internal;

// `matchPath` source code:
//    https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/matchPath.js
const reactRouter = require('react-router');
const {matchPath} = reactRouter||{};
assert.internal(matchPath, {matchPath, reactRouter});

const router = {
    doesMatchUrl,
    getRouteArguments,
    getRouteUrl,
 // hasOnlyOneUniqueRoute,
 // getRouteString,
};

module.exports = router;

function doesMatchUrl(urlProps, pageInfo) {
    const match_info = get_match_info(urlProps, pageInfo);
    return !!match_info;
    if( ! match_info ) {
        return false;
    }
}

function getRouteArguments(urlProps, pageInfo) {
    const match_info = get_match_info(urlProps, pageInfo);
    if( ! match_info ) {
        return null;
    }
    const params = {match_info};
    assert.internal(params && params.constructor === Object, params);
    return match_info.params;
}

function getRouteUrl(routeArguments, pageInfo) {
    assert_usage(
        routeArguments && routeArguments.constructor===Object && Object.keys(routeArguments).length===0,
        "`getRouteUrl` not supported for parameterized routes."
    );
    const urlPartial = pageInfo.route;
    return urlPartial;
}

function get_match_info(urlProps, pageInfo) {
    const route = pageInfo && pageInfo.route;
    if( ! route ) {
        return null;
    }
    assert_usage([String, Object].includes(route.constructor));
    const options = (
        route.constructor===String ? (
            {path: route, exact: true}
        ) : (
            Object.assign({exact: true}, route)
        )
    );
    assert_urlProps(urlProps);
    const {pathname} = urlProps;
    return matchPath(pathname, options);
}

function assert_urlProps(urlProps) {
    assert.internal(urlProps && urlProps.constructor===Object, {urlProps});
    assert.internal(urlProps.pathname && urlProps.pathname.constructor===String && urlProps.pathname.startsWith('/'), urlProps);
}

function hasOnlyOneUniqueRoute() {
    assert_todo(false);
    // Will be possible with pathToRegexp.parse('/route/:foo/(.*)')
    //  - https://github.com/pillarjs/path-to-regexp#parse
    //  - Is availble for path-to-regexp@2 but react-router is using path-to-regexp@^1.7.0
    //    - See https://github.com/ReactTraining/react-router/blob/master/packages/react-router/package.json
}

function getRouteString() {
    assert_todo(false);
    // Should be possible with pathToRegexp.compile('/user/:id')
    //  - https://github.com/pillarjs/path-to-regexp#compile-reverse-path-to-regexp
    //  - available at path-to-regexp@^1.7.0 ?
}
