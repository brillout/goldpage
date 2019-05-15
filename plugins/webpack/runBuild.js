const Build = require('webpack-ssr/Build');
const watchDir = require('webpack-ssr/watchDir');
const assert = require('reassert');

const projectConfig = require('@brillout/reconfig');

const outputDir = projectConfig.projectFiles.buildOutputDir;
const getPageFiles = () => projectConfig.getPageConfigFiles();
const getWebpackBrowserConfig = ({config, ...utils}) => {
  const webpackBrowserConfigModifier = assemble_modifiers('webpackBrowserConfig');
  return webpackBrowserConfigModifier({config, ...utils});
};
const getWebpackNodejsConfig = ({config, ...utils}) => {
  const webpackNodejsConfigModifier = assemble_modifiers('webpackNodejsConfig');
  return webpackNodejsConfigModifier({config, ...utils});
};
const {log, doNotWatchBuildFiles} = projectConfig;
const {pagesDir} = projectConfig.projectFiles;
const {getPageHtmlsFile, getPageBrowserEntriesFile} = projectConfig;
const getPageHtmls = require(getPageHtmlsFile);
const getPageBrowserEntries = require(getPageBrowserEntriesFile);
const serverEntryFile = projectConfig.transpileServerCode && projectConfig.serverStartFile;

const build = new Build({
    outputDir,
    getPageFiles,
    getPageBrowserEntries,
    getPageHtmls,
    getWebpackBrowserConfig,
    getWebpackNodejsConfig,
    log,
    doNotWatchBuildFiles,
    serverEntryFile,
});

watchDir(pagesDir, () => {build()});

module.exports = build;



// We assemble several webpack config modifiers into one supra modifier
function assemble_modifiers(modifier_name) {
    const assert_usage = require('reassert/usage');

    // `config` holds a webpack config
    let supra_modifier = ({config}) => config;

    const modifiers = projectConfig[modifier_name];

    // We assemble all `configParts`'s config modifiers into one `supra_modifier`
    modifiers
    .forEach(modifier => {
        assert_usage(modifier instanceof Function, modifier);
        const previous_modifier = supra_modifier;
        supra_modifier = (
            args => {
                const config = previous_modifier(args);
                const config__new = modifier({...args, config});
                assert_usage(
                    config__new,
                    "A `"+modifier_name+"`" +
                    " is returning `"+config__new+"` but it should be returning a webpack config instead."
                );
                return config__new;
            }
        );
    });

    return supra_modifier;
}

