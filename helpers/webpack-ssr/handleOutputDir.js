const assert_internal = require('reassert/internal');
const assert_usage = require('reassert/usage');
const mkdirp = require('mkdirp');
const pathModule = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const {colorError, colorEmphasisLight} = require('@brillout/cli-theme');
const get_timestamp = require('./get_timestamp');
const GOLDPAGE_BUILD_INFO_DIR = require('./GOLDPAGE_BUILD_INFO_DIR');

module.exports = handleOutputDir;

function handleOutputDir({outputDir}) {
    assert_usage(outputDir && pathModule.isAbsolute(outputDir), outputDir);
    const stamp_path = path__resolve(outputDir, GOLDPAGE_BUILD_INFO_DIR, 'buildStart');

    remove_output_dir();
    create_output_dir();

    return;

    function create_output_dir() {
        mkdirp.sync(pathModule.dirname(outputDir));
        fs__write_file(stamp_path, get_timestamp());
        fs__write_file(path__resolve(outputDir, GOLDPAGE_BUILD_INFO_DIR, 'README.md'), 'This directory contains internal [Goldpage](https://github.com/reframejs/goldpage) data.\n\nIgnore this directory.\n\nDo **NOT** depend on this directory; anything in this directory may change at any patch semver update. Open a GitHub issue instead.\n');
    }

    function remove_output_dir() {
        if( ! fs__path_exists(outputDir) ) {
            return;
        }

        assert_existing_output_dir();

        fsExtra.removeSync(outputDir);
    }

    function assert_existing_output_dir() {
        // TODO remove this line
        if( fs__path_exists(path__resolve(outputDir, 'build-stamp')) ) return;

        const stamp_content = fs__path_exists(stamp_path) && fs__read(stamp_path).trim();
        assert_usage(
            stamp_content,
            colorError('goldpage stamp is missing')+' at `'+stamp_path+'`.',
            '',
            "It is therefore assumed that `"+outputDir+"` has not been created by Goldpage.",
            '',
            colorEmphasisLight('Remove `'+outputDir+'` and retry.'),
            '',
        );
        assert_internal(stamp_content && !/\s/.test(stamp_content), stamp_content);
    }
}


function fs__read(filepath) {
    return fs.readFileSync(filepath, 'utf8');
}
function fs__write_file(path, content) {
    assert_internal(pathModule.isAbsolute(path));
    mkdirp.sync(pathModule.dirname(path));
    fs.writeFileSync(path, content);
}
function fs__rename(path_old, path_new) {
    assert_internal(pathModule.isAbsolute(path_old));
    assert_internal(pathModule.isAbsolute(path_new));
    mkdirp.sync(pathModule.dirname(path_new));
    fs.renameSync(path_old, path_new);
}
function fs__ls(dirpath) {
    assert_internal(pathModule.isAbsolute(dirpath));
    const files = (
        fs.readdirSync(dirpath)
        .map(filename => path__resolve(dirpath, filename))
    );
    files.forEach(filepath => {
        assert_internal(pathModule.isAbsolute(filepath), dirpath, files);
        assert_internal(pathModule.relative(dirpath, filepath).split(pathModule.sep).length===1, dirpath, files);
    });
    return files;
}
function fs__path_exists(path) {
    try {
        fs.statSync(path);
        return true;
    }
    catch(e) {
        return false;
    }
}
function path__resolve(path1, path2, ...paths) {
    assert_internal(path1 && pathModule.isAbsolute(path1), path1);
    assert_internal(path2 && path2.constructor===String, path2);
    return pathModule.resolve(path1, path2, ...paths);
}
