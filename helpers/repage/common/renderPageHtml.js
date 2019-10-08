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
    <br/>
    <br/>
    <style>
      .goldpage-inline-code {
        display: inline-block;
        padding: 0px 2px 1px 3px;
        font-size: 0.98em;
        border: 1px solid #d8d8d8;
        border-radius: 3px;
        background: #f5f5f5;
      }
      .goldpage-small {
        color: #777;
      }
    </style>
    <small class='goldpage-small'>
      Errors are shown only in development.
      (That is when <code class='goldpage-inline-code'>process.env.NODE_ENV !== 'production'</code> on the Node.js server.)
    </small>
</div>
`
);

    return html({body: [errHtml]});
}

function isProduction() {
   return process.env.NODE_ENV === 'production';
}
