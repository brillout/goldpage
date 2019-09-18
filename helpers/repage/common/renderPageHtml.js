const {getInitialProps} = require('./getInitialProps');
const html = require('@brillout/html');
const stripAnsi = require('strip-ansi');

module.exports = {renderPageHtml};

async function renderPageHtml({htmlRender, pageConfig, url, router, requestObject}) {
    let html;
    try {
        const initialProps = await getInitialProps({pageConfig, url, router, requestObject, isNodejs: true});
        html = await htmlRender({pageConfig, initialProps});
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
        <pre><code>\n${stripAnsi(err.stack)}</code></pre>
    </div>
</div>
`
);

    return html({body: [errHtml]});
}

function isProduction() {
   return process.env.NODE_ENV === 'production';
}
