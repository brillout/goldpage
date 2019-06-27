const {getInitialProps} = require('./common/getInitialProps');
const assert = require('@brillout/assert');

module.exports = hydratePage;

async function hydratePage({pageConfig, router, renderPageToDom}) {
    const url = window.location.href;
    assert.internal(url.startsWith('http'));

    const initialProps = await getInitialProps({pageConfig, url, router});

    await renderPageToDom({pageConfig, initialProps});
}
