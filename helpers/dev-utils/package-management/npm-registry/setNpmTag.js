const getPackages = require('../getPackages');
const assert = require('reassert');
const {symbolSuccess, colorEmphasis} = require('@brillout/cli-theme');


assert(process.argv.length===3);
const npmTag = process.argv[2];
assert(npmTag);

setNpmTag(npmTag);

async function setNpmTag(npmTag) {
    getPackages()
    .forEach(async ({exec, packageNameAndVersion}) => {
        // See source code of `exec` when getting 401 errors
        await exec('npm', ['dist-tag', 'add', packageNameAndVersion, npmTag]);
        console.log(symbolSuccess+'tag '+colorEmphasis(npmTag)+' added to '+packageNameAndVersion);
    });
}
