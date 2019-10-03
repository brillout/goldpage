const {Config, StandardConfig} = require('@rebuild/config');
const assert_internal = require('reassert/internal');

module.exports = getDefaultBrowserConfig;

function getDefaultBrowserConfig({entries=[], outputPath, filename, autoReloadPort}) {
    assert_internal(outputPath);
    assert_internal(autoReloadPort);

    const config = new Config();

    config.add([
        new StandardConfig({
            entry: entries,
            outputPath,
            filename,
            constants: {
              '__WEBPACK__PORT__': autoReloadPort,
            },
        }),
    ]);

    return config.assemble();
}

