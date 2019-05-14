const {transparentGetter, arrayGetter} = require('@brillout/reconfig/getters');
const runBuildFile = require.resolve('./runBuild');
const getBuildInfoFile = require.resolve('./getBuildInfo');
const getPageBrowserEntriesFile = require.resolve('./getPageBrowserEntries');
const getPageHtmlsFile = require.resolve('./getPageHtmls');
const packageName = require('./package.json').name;


/*
const config = require('@brillout/reconfig');
Object.assign(
  config,
  {
    runBuildFile,
    getBuildInfoFile,
    getPageHtmlsFile,
    getPageBrowserEntriesFile,
  },
);
*/

module.exports = {
    $name: packageName,
    $getters: [
        transparentGetter('runBuildFile'),
        transparentGetter('getBuildInfoFile'),
        transparentGetter('getPageHtmlsFile'),
        transparentGetter('getPageBrowserEntriesFile'),

        transparentGetter('doNotWatchBuildFiles'),

        // TODO
        transparentGetter('projectFiles'),
        transparentGetter('getPageConfigFiles'),

        transparentGetter('defaultPageConfig'),
        transparentGetter('transpileServerCode'),
        transparentGetter('log'),
        arrayGetter('browserConfigs'),
        transparentGetter('getBrowserConfigs'),
        arrayGetter('browserInitFunctions'),
        arrayGetter('webpackNodejsConfig'),
        arrayGetter('webpackBrowserConfig'),
    ],
    getBrowserConfigs,
    runBuildFile,
    getBuildInfoFile,
    getPageHtmlsFile,
    getPageBrowserEntriesFile,
    ejectables: getEjectables(),
};

function getBrowserConfigs() {
    const projectConfig = require('@brillout/reconfig').getConfig({configFileName: 'reframe.config.js'});
    const assert_plugin = require('reassert/usage');

    const configPaths = {};
    projectConfig
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
                let filePath = projectConfig[configPath];
                assert_plugin(filePath.constructor===String);
                filePath = require.resolve(filePath);
                assert_plugin(filePath);
                return filePath;
            })();

            const configFiles = (() => {
                if( ! configIsList ) return null;
                const filePaths = (
                  projectConfig[configPath]
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
