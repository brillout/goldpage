const config = require('@brillout/reconfig');
const runBuildFile = require.resolve('./runBuild');
const getBuildInfoFile = require.resolve('./getBuildInfo');
const getPageBrowserEntriesFile = require.resolve('./getPageBrowserEntries');
const getPageHtmlsFile = require.resolve('./getPageHtmls');
const packageName = require('./package.json').name;

Object.assign(
  config,
  {
    runBuildFile,
    getBuildInfoFile,
    getPageHtmlsFile,
    getPageBrowserEntriesFile,
    getBrowserConfigs,
  },
);

function getBrowserConfigs() {
    const assert_plugin = require('reassert/usage');

    const configPaths = {};
    config
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
                let filePath = config[configPath];
                assert_plugin(filePath.constructor===String);
                filePath = require.resolve(filePath);
                assert_plugin(filePath);
                return filePath;
            })();

            const configFiles = (() => {
                if( ! configIsList ) return null;
                const filePaths = (
                  config[configPath]
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

function getEjectables() {
    return [
        {
            name: 'build',
            description: 'Eject the build code.',
            actions: [
                {
                    targetDir: 'build/',
                    configIsFilePath: true,
                    configPath: 'runBuildFile',
                },
                {
                    targetDir: 'build/',
                    configIsFilePath: true,
                    configPath: 'getBuildInfoFile',
                },
            ],
        },
        {
            name: 'build-rendering',
            description: 'Eject the code that renders the pages to HTML at build-time. (Static Rendering.)',
            actions: [
                {
                    targetDir: 'build/',
                    configIsFilePath: true,
                    configPath: 'getPageHtmlsFile',
                },
            ],
        },
        {
            name: 'build-browser-entries',
            description: 'Eject the code that generates the browser entry of each page.',
            actions: [
                {
                    targetDir: 'build/',
                    configIsFilePath: true,
                    configPath: 'getPageBrowserEntriesFile',
                },
            ],
        },
    ];
}
