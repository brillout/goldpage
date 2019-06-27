const assert = require('@brillout/reassert');
const {renderPageHtml} = require('./common/renderPageHtml');

module.exports = getStaticPageHtmls;

async function getStaticPageHtmls({pageConfigs, router, renderToHtml}) {
    return (
        Promise.all(
            pageConfigs
            .filter(pageConfig => {
                if( ! router.hasOnlyOneUniqueRoute ) {
                    return true;
                }

                const isUniqueRoute = router.hasOnlyOneUniqueRoute(pageConfig);

                assert.warning(
                    isUniqueRoute || !pageConfig.renderHtmlAtBuildTime,
                    pageConfig,
                    "Can't have `renderHtmlAtBuildTime: true` since the route is parameterized",
                    "Page config in question is printed above."
                );

                return isUniqueRoute;
            })
            .filter(pageConfig => pageConfig.renderHtmlAtBuildTime)
            .map(async pageConfig => {
                const url = router.getRouteUrl({}, pageConfig);

                const html = await renderPageHtml({renderToHtml, pageConfig, url, router});

                return {url, html};
            })
        )
    )
}
