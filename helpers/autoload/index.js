const assert = require('reassert');
const {packageJson, packageJsonFile, projectDir} = require('@brillout/project-files');
const findUp = require('find-up');
const path = require('path');

module.exports = {loadDependencies/*, loadFile*/};

/*
function loadFile(filename, opts) {
  const projectFiles = new ProjectFiles();
  const files = projectFiles.findFiles(filename, opts);
  assert.usage(files.length<=1);
  let fileExport;
  files.forEach(filePath => {
    assert.internal(path.isAbsolute(filePath));
    fileExport = (
   // eval('require')
      require
      (filePath)
    );
  });
  return {loaded: files, fileExport};
}
*/

function loadDependencies() {
  assert.internal(packageJsonFile);
  assert.internal(projectDir);

  const {dependencies} = packageJson;
  if( !dependencies ) {
    return;
  }

  const loaded = [];
  Object.keys(dependencies)
  .forEach(depName => {
    const dep = (
   // eval('require')
      require
      .resolve(depName+'/package.json', {paths: [projectDir]})
    );
    const depPackageJson = (
   // eval('require')
      require
      (dep)
    );
    if( depPackageJson['@brillout/autoload'] ) {
      loaded.push(depName);
   // eval('require')
      require
      (depName);
    }
  });

  return {loaded, packageJsonFile};
}
