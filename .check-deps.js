// Npm package `@brillout/check-deps` options

// Do not check the dependencies of examples
module.exports = {
  skipCheck: (
    packagePath =>
       packagePath.startsWith('examples/') ||
       packagePath.startsWith('plugins/') && packagePath.endsWith('/example')
  ),
};
