const assert = require('reassert');
const getUserDir = require('@brillout/get-user-dir');
const findUp = require('find-up');

module.exports = autoload;

function autoload() {
  const userDir = getUserDir();

  const packageJsonFile = findUp.sync('package.json', {cwd: userDir+'/'});

  const packageJson = require(packageJsonFile);
  if( !packageJsonFile ) {
    return;
  }

  const {dependencies} = packageJson;
  if( !dependencies ) {
    return;
  }

  Object.keys(dependencies)
  .forEach(depName => {
    const dep = require.resolve(depName+'/package.json', {paths: [userDir]});
    const depPackageJson = require(dep);
    if( depPackageJson['@brillout/autoload'] ) {
      require(depName);
    }
  });
}
