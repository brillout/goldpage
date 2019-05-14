const {transparentGetter} = require('@brillout/reconfig/getters');

module.exports = [
    transparentGetter('renderToDomFile'),
    transparentGetter('renderToHtmlFile'),
];
