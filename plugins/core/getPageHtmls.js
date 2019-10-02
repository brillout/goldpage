const assert_internal = require('reassert/internal');
const assert_usage = require('reassert/usage');
const config = require('@brillout/reconfig');
const getStaticPageHtmls = require('@brillout/repage/getStaticPageHtmls');

module.exports = getPageHtmls;

async function getPageHtmls() {
    const {pages__fullProps} = config.goldpage.getBuildInfo({builtShouldBeFinished: true});

    const {router: routerFile, renderPageToHtml} = config.goldpage;
    assert_usage(renderPageToHtml);
    const htmlRender = (
   // eval('require')
      require
      (renderPageToHtml)
    );
    const router = (
   // eval('require')
      require
      (routerFile)
    );
    assert_usage(router);
    assert_usage(htmlRender);

    return (
        (await getStaticPageHtmls({pageConfigs: pages__fullProps, router, htmlRender}))
        .map(({url, html}) => {
            assert_internal(html===null || html && html.constructor===String, html);
            assert_internal(url.startsWith('/'));
            const pathname = url;
            return {pathname, html};
        })
    );
}
