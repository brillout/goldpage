const assert_internal = require('reassert/internal');
const crypto = require('crypto');
const getPageHtml = require('@brillout/repage/getPageHtml');
const config = require('@brillout/reconfig');


module.exports = ServerRendering;

// We set a low priority for the universal adapters
ServerRendering.executionPriority = -1000;

async function ServerRendering(requestObject) {
    const {pages__fullProps, pagesNotBuilt, goldpageIsBuilding} = config.goldpage.getBuildInfo();

    if( pagesNotBuilt ) {
      return {
        body: (
          '<html><body>'+ (
            goldpageIsBuilding ? (
              'Goldpage is currently building your pages.'
            ) :(
              'Your pages are not built (yet?).'
            )
          ) +
          '</body></html>'
        ),
      };
    }

    const html = await getHtml({requestObject, pages__fullProps});

    if( html === null ) {
        return null;
    }

    const headers = [];
    headers.push({name: 'Content-Type', value: 'text/html'});
    headers.push({name: 'ETag', value: '"'+computeHash(html)+'"'});

    return {
        body: html,
        headers,
    }
}

async function getHtml({requestObject, pages__fullProps}) {
    const {url} = requestObject;
    assert_internal(url.startsWith('http'), {url});

    const {renderPageToHtml, router: routerFile} = config.goldpage;
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

    const html = await getPageHtml({pageConfigs: pages__fullProps, url, htmlRender, router, requestObject});
    assert_internal(html===null || html.constructor===String, html);

    return html;
}

function computeHash(str) {
    return (
        crypto
        .createHash('md5')
        .update(str, 'utf8')
        .digest('base64')
        .replace(/=+$/, '')
    );
}
