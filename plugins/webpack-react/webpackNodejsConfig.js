const babelPresetReactPath = require.resolve('@babel/preset-react');

module.exports = webpackNodejsConfig;

function webpackNodejsConfig({config, setRule, getRule, addBabelPreset, addExtension, webpackModule}) {
    addBabelPreset(config, babelPresetReactPath);

    addJsxExtension({config, setRule, getRule, addExtension});

    addReactGlobal(config, webpackModule);

    return config;
}

function addJsxExtension({config, getRule, setRule, addExtension}) {
    const jsRule = getRule(config, '.js');

    if( ! jsRule ) {
        return;
    }

    const jsxRule = {...jsRule};
    delete jsxRule.test;
    setRule(config, '.jsx', jsxRule);

    addExtension(config, '.jsx');
}

function addReactGlobal(config, webpackModule) {
  // Load `React` in each module
  // To avoid the `React is not defined` error.
  // Which seems to happen when trying to use TypeScript with the React fragment JSX syntax `<></>`, even when setting the `tsconfig.json#compilerOptions.jsx` flag
  // https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined/35672696#35672696
  config.plugins = config.plugins || [];
  config.plugins.push(
    new webpackModule.ProvidePlugin({
      React: "react",
    })
  );
}
