const {requireFileGetter, transparentGetter} = require('@brillout/reconfig/getters');

module.exports = [
    transparentGetter('routerFile'),
    requireFileGetter('routerFile'),
];
