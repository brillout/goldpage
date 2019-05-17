const {reconfig} = require('@brillout/reconfig');
const getPageBrowserEntriesFile = require.resolve('./getPageBrowserEntries');
const getPageHtmlsFile = require.resolve('./getPageHtmls');

Object.assign(
  reconfig,
  {
    getPageHtmlsFile,
    getPageBrowserEntriesFile,
    getBrowserConfigs,
  },
);

function getBrowserConfigs() {
    const assert_plugin = require('reassert/usage');

    const configPaths = {};
    reconfig
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
            assert_plugin(configPath.endsWith(suffix));
            const configName = configPath.slice(0, -suffix.length) + (configIsList ? 's' : '');

            assert_plugin(!configPath.includes('.'));

            const configFile = (() => {
                if( configIsList ) return null;
                let filePath = reconfig[configPath];
                assert_plugin(filePath.constructor===String);
                filePath = require.resolve(filePath);
                assert_plugin(filePath);
                return filePath;
            })();

            const configFiles = (() => {
                if( ! configIsList ) return null;
                const filePaths = (
                  reconfig[configPath]
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
