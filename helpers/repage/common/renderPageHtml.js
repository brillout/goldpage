const {getInitialProps} = require('./getInitialProps');
const html = require('@brillout/html');

module.exports = {renderPageHtml};

async function renderPageHtml({renderToHtml, pageConfig, url, router, requestContext}) {
    let html;
    try {
        const initialProps = await getInitialProps({pageConfig, url, router, requestContext, isNodejs: true});
        html = await renderToHtml({pageConfig, initialProps});
    } catch(err) {
        if( isProduction() ) {
            throw err;
        }
        console.log();
        console.log();
        console.error(err);
        console.log();
        console.log();
        html = renderHtmlError({pageConfig, err});
    }

    return html;
}

function renderHtmlError({pageConfig, err}) {
    const errHtml = (
`<div>
    <h1>Internal Error 500</h1>
    <div>
        <pre><code>\n${err.stack}</code></pre>
    </div>
</div>
`
);

    return html({body: [errHtml]});
}

function isProduction() {
   return process.env.NODE_ENV === 'production';
}
