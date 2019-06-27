const assert_internal = require('reassert/internal');
const assert_usage = require('reassert/usage');
const config = require('@brillout/reconfig');
const getStaticPageHtmls = require('@brillout/repage/getStaticPageHtmls');

module.exports = getPageHtmls;

async function getPageHtmls() {
    const {pageConfigs} = config.ssrCoin.getBuildInfo();

    const {router: routerFile, renderPageToHtml} = config.ssrCoin;
    const renderToHtml = require(renderPageToHtml);
    const router = require(routerFile);
    assert_usage(router);
    assert_usage(renderToHtml);

    return (
        (await getStaticPageHtmls({pageConfigs, router, renderToHtml}))
        .map(({url, html}) => {
            assert_internal(html===null || html && html.constructor===String, html);
            assert_internal(url.startsWith('/'));
            const pathname = url;
            return {pathname, html};
        })
    );
}
