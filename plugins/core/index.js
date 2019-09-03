const config = require('@brillout/reconfig');
const getPageBrowserEntriesFile = require.resolve('./getPageBrowserEntries');
const getPageHtmlsFile = require.resolve('./getPageHtmls');

Object.assign(
  config.ssrCoin,
  {
    getPageHtmlsFile,
    getPageBrowserEntriesFile,
    getBrowserConfigs,
  },
);

function getBrowserConfigs() {
    const assert_plugin = require('reassert/usage');
    const assert = require('@brillout/reassert');

    const configPaths = {};
    config
    .ssrCoin
    .browserConfigs
    .forEach(browserConfigSpec => {
        if( browserConfigSpec.constructor === String ) {
            browserConfigSpec = {
                configPath: browserConfigSpec,
            };
        }
        assert_plugin(browserConfigSpec.configPath);
        configPaths[browserConfigSpec.configPath] = browserConfigSpec;
    });

    const browserConfigs = (
        Object.values(configPaths)
        .map(({configPath, configIsList}) => {
            const suffix = 'File';
            const configName = (
              !configPath.endsWith(suffix) ? (
                configPath
              ) : (
                configPath.slice(0, -suffix.length) + (configIsList ? 's' : '')
              )
            );

            assert_plugin(!configPath.includes('.'));

            const configFile = (() => {
                if( configIsList ) return null;
                let filePath = config.ssrCoin[configPath];
                try {
                  filePath = require.resolve(filePath, {paths: [config.ssrCoin.projectDir]});
                } catch(err) {
                  assert.usage(
                    false,
                    "The `domRender` config is set to `"+filePath+"`.",
                    "But `domRender` should be the path of your `domRender` file.",
                    "E.g.:",
                    "  // ssr-coin.config.js",
                    "  module.exports = {",
                    "   domRender: './path/to/your/domRender.js'",
                    "   /* ... */",
                    "  };",
                  );
                }
                assert_plugin(filePath);
                return filePath;
            })();

            const configFiles = (() => {
                if( ! configIsList ) return null;
                const filePaths = (
                  config.ssrCoin[configPath]
                  .map(filePath => {
                    assert_plugin(filePath);
                    filePath = require.resolve(filePath);
                    assert_plugin(filePath);
                  })
                );
                assert_plugin(filePaths.length>=1);
                return filePaths;
            })();

            return {configName, configFile, configFiles};
        })
    );

    return browserConfigs;
}
