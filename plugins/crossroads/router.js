const assert_internal = require('reassert/internal');
const assert_usage = require('reassert/usage');
// undocumented APIs;
//  - https://github.com/millermedeiros/crossroads.js/blob/master/dev/tests/spec/lexer.spec.js
const crossroads = require('crossroads');

module.exports = {
    doesMatchUrl,
    getRouteArguments,
    hasOnlyOneUniqueRoute,
    getRouteUrl,
 // getRouteString,
};

function doesMatchUrl(urlProps, pageInfo) {
    assert_urlProps(urlProps);
    const route_crossroad = get_route_crossroads(pageInfo);

    const ret = route_crossroad.match(urlProps.pathname);
    assert_internal([true, false].includes(ret));
    return ret;
}

function getRouteArguments(urlProps, pageInfo) {
    assert_urlProps(urlProps);
    const route_crossroad = get_route_crossroads(pageInfo, {can_be_null: true});
    if( ! route_crossroad || ! route_crossroad.match(urlProps.pathname) ) {
        return null;
    }
    const routeArguments = route_crossroad._getParamsObject(urlProps.pathname);
    assert_internal(routeArguments.constructor===Object, routeArguments);
    return routeArguments;
}

function hasOnlyOneUniqueRoute(pageInfo) {
    assert_page_info(pageInfo);
    const {route} = pageInfo;
    const paramIds = crossroads.patternLexer.getParamIds(route);
    assert_internal(paramIds.constructor===Array);
    return paramIds.length===0;
}

function getRouteUrl(routeArguments, pageInfo) {
    const route_crossroad = get_route_crossroads(pageInfo);
    return route_crossroad.interpolate(routeArguments);
}

/*
function getRouteString() {
    const route_crossroad = parse_route_string(route);
    return route_crossroad._pattern;
}
*/

function get_route_crossroads(pageInfo, {can_be_null=false}={}) {
    assert_internal([true, false].includes(can_be_null));
    assert_page_info(pageInfo, {can_be_null});
    const {route} = pageInfo;
    if( can_be_null && ! route ) {
        return null;
    }
    assert_internal(route);
    const route_crossroad = parse_route_string(route);
    return route_crossroad;
}

function parse_route_string(route_string) {
    assert_internal(route_string.constructor===String, route_string);
    const router = crossroads.create();
    const route_crossroad = router.addRoute(route_string);
    return route_crossroad;
}

function assert_urlProps(urlProps) {
    assert_usage(urlProps && urlProps.constructor===Object, urlProps);
    assert_usage(urlProps.pathname && urlProps.pathname.constructor===String && urlProps.pathname.startsWith('/'), urlProps);
}

function assert_page_info(pageInfo, {can_be_null}={}) {
    assert_usage(pageInfo, pageInfo);
    assert_usage(
        can_be_null || pageInfo.route,
        pageInfo
    );
}

