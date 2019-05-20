const config = require('@brillout/reconfig');

config.GoldSSR.transpileServerCode = true;

config.GoldSSR.typescript = config.GoldSSR.typescript || {};

config.GoldSSR.webpackBrowserConfig = config.GoldSSR.webpackBrowserConfig || [];
config.GoldSSR.webpackBrowserConfig.push(webpackMod);

config.GoldSSR.webpackNodejsConfig = config.GoldSSR.webpackNodejsConfig || [];
config.GoldSSR.webpackNodejsConfig.push(webpackMod);

function webpackMod({config: webpackConfig, getRule, setRule, addExtension, addBabelPreset, addBabelPlugin}) {
  addSyntaxTransforms({webpackConfig, addBabelPreset, addBabelPlugin});

  addTypechecking({webpackConfig});

  addExtensions({webpackConfig, getRule, setRule, addExtension});

  return webpackConfig;
}

function addSyntaxTransforms({webpackConfig, addBabelPreset, addBabelPlugin}) {
  const presetOptions = {
    isTSX: true,
    allExtensions: true,
    ...config.GoldSSR.typescript.babelPresetTypescript,
  };

  addBabelPreset(webpackConfig, [require.resolve('@babel/preset-typescript'), presetOptions]);
  addBabelPlugin(webpackConfig, [require.resolve('@babel/plugin-proposal-decorators'), {legacy: true}]);
  addBabelPlugin(webpackConfig, [require.resolve('@babel/plugin-proposal-class-properties'), {loose: true}]);
}

function addTypechecking({webpackConfig}) {
  if( ! (config.GoldSSR.typescript.forkTsCheckerWebpackPlugin||{}).enable ) {
    return;
  }

  const tsconfig = (config.GoldSSR.typescript.forkTsCheckerWebpackPlugin||{}).tsconfig || get_tsconfig_path(webpackConfig);

  const checkerOptions = {
    silent: true,
    async: false,
    tsconfig,
    ...config.GoldSSR.typescript.forkTsCheckerWebpackPlugin,
  };

  const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
  webpackConfig.plugins = webpackConfig.plugins || [];
  webpackConfig.plugins.push(new ForkTsCheckerWebpackPlugin(checkerOptions));
}

function addExtensions({webpackConfig, getRule, setRule, addExtension}) {
  const jsRule = getRule(webpackConfig, '.js');
  const rule = {...jsRule};
  delete rule.test;
  setRule(webpackConfig, '.ts', rule);
  setRule(webpackConfig, '.tsx', rule);

  addExtension(webpackConfig, '.ts');
  addExtension(webpackConfig, '.tsx');
}

function get_tsconfig_path(webpackConfig) {
  const find_up = require('find-up');
  const assert_usage = require('reassert/usage');
  const getUserDir = require('@brillout/get-user-dir');

  const userDir = webpackConfig.context || getUserDir();
  const algorithmDesc = 'The "user directory" is determined by the `context` option of the webpack config and if missing then by using `@brillout/get-user-dir`';
  assert_usage(
    userDir,
    'Cannot find `tsconfig.json` because couldn\'t find the "user directory".',
    algorithmDesc
  );
  const tsconfig_path = find_up.sync('tsconfig.json', {cwd: userDir});
  assert_usage(
    tsconfig_path,
    'Cannot find `tsconfig.json` by looking into every directory from the "user directory" '+userDir+' to the root `/`.',
    algorithmDesc
  );
  return tsconfig_path;
}
