const assert = require('reassert');
const ProjectFiles = require('@brillout/project-files');
const findUp = require('find-up');
const path = require('path');

module.exports = {loadDependencies, loadFile};

function loadFile(filename, opts) {
  const projectFiles = new ProjectFiles();
  const {findProjectFiles} = projectFiles;
  const files = findProjectFiles(filename, opts);
  files.forEach(filePath => {
    assert.internal(path.isAbsolute(filePath));
    require(filePath);
  });
  return {loaded: files, ...projectFiles};
}

function loadDependencies() {
  const projectFiles = new ProjectFiles();
  const {packageJsonFile, projectDir} = projectFiles;
  assert.internal(packageJsonFile);
  assert.internal(projectDir);

  const packageJson = require(packageJsonFile);
  if( !packageJsonFile ) {
    return;
  }

  const {dependencies} = packageJson;
  if( !dependencies ) {
    return;
  }

  const loaded = [];
  Object.keys(dependencies)
  .forEach(depName => {
    const dep = require.resolve(depName+'/package.json', {paths: [projectDir]});
    const depPackageJson = require(dep);
    if( depPackageJson['@brillout/autoload'] ) {
      loaded.push(depName);
      require(depName);
    }
  });

  return {loaded, ...projectFiles};
}
