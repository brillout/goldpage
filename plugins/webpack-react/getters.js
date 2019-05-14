const {requireFileGetter, transparentGetter} = require('@brillout/reconfig/getters');

module.exports = [
    transparentGetter('renderToDomFile'),
    requireFileGetter('renderToHtmlFile', 'renderToHtml'),
];
