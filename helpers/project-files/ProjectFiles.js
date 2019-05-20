module.exports = ProjectFiles;

function ProjectFiles() {
  const getUserDir = require('@brillout/get-user-dir');
  const assert = require('reassert');
  const path = require('path');
  const findProjectFiles_ = require('./findProjectFiles');
  const find_up = require('find-up');

  const userDir = getUserDir();
  assert.internal(userDir);
  const packageJsonFile = find_up.sync('package.json', {cwd: userDir});
  assert.usage(
    packageJsonFile,
    "Could not find package.json between `/` and `"+userDir+"`",
  );

  const projectDir = path.dirname(packageJsonFile);

  Object.assign(
    this,
    {
      projectDir,
      findProjectFiles,
    }
  );

  return this;

  function findProjectFiles(filename, opts) {
    return findProjectFiles_(filename, {projectDir, ...opts})
  }
}
