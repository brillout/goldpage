const assert = require('@brillout/reassert');
const {renderPageHtml} = require('./common/renderPageHtml');
const parseUrl = require('@brillout/parse-url');

module.exports = getPageHtml;

async function getPageHtml({pageConfigs, url, htmlRender, router, requestObject}) {
    const urlProps = parseUrl(url);
    const pageConfigMatches = (
        pageConfigs
        .filter(pageConfig => router.doesMatchUrl(urlProps, pageConfig))
    );

    if( pageConfigMatches.length===0 ) {
        return null;
    }

    const pageConfig = pageConfigMatches[0];

    assert.warning(
        !pageConfig.renderHtmlAtBuildTime,
        'Performance warning; dynamically rendering a static page at `'+url+'`.'
    );

    const html = await renderPageHtml({htmlRender, pageConfig, url, router, requestObject});

    return html;
}
