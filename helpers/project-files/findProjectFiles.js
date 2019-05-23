const assert_internal = require('reassert/internal');
const assert_usage = require('reassert/usage');
//const glob = require('glob');
const ignore_module = require('ignore');
const glob_gitignore = require('glob-gitignore');
const find_up_module = require('find-up');
const path_module = require('path');
const fs = require('fs');

module.exports = findProjectFiles;

function findProjectFiles(filename, {regexSearch, projectDir, onlyDirectories, noDirectories, within, ignoreSubProjects}={}) {
 // assert_usage(regexSearch===true);
    assert_usage(!filename.includes('/'));
    assert_usage(!within || path_module.isAbsolute(within));
    assert_usage(!projectDir || path_module.isAbsolute(projectDir));
    assert_usage(within || projectDir);
    within = within || projectDir;

    const glob_pattern = '**/'+filename+(onlyDirectories ? '/' : '');

    const glob_options = {
        cwd: within,
        nodir: noDirectories, // doesn't seem to always work in `glob-gitignore` and `glob`
        ignore: get_ignore({cwd: within, ignoreSubProjects}),
    };

    const paths_found = (
        /*
        glob.sync(glob_pattern, glob_options)
        /*/
        glob_gitignore.sync(glob_pattern, glob_options)
        //*/
        .map(relative_path => path_module.join(within, relative_path))
    );
    assert_internal(paths_found.length>=0);
    assert_internal(paths_found.every(path_found => path_module.isAbsolute(path_found)));
    return paths_found;
}

function get_ignore({cwd, ignoreSubProjects}) {
    const ignore = ignore_module();

    const gitignore = get_gitignore_content({cwd});
    let gitignore_content = get_gitignore_content({cwd});
    gitignore_content += [
      'node_modules/',
      // Skip hidden directories such as Yarn v2's `.yarn`
      // (and Yarn wants you to commit that directory)
      // or Parcel's `.cache`.
      '.*/',
      '',
    ].join('\n');
    ignore.add(gitignore_content);

    if( ignoreSubProjects ) {
        // TODO non-regexp search
        const packageJsonFiles = findProjectFiles('package\.json', {regexSearch: true, cwd, noDirectories: true});
        const subPackages = (
            packageJsonFiles
            .map(packageJsonFile => path_module.dirname(packageJsonFile))
            .filter(subPackageRoot => subPackageRoot!==cwd)
            .map(subPackageRoot => path_module.relative(cwd, subPackageRoot))
            .map(subPackagePath => subPackagePath.split(path_module.sep).join('/')+'/')
        );
        ignore.add(subPackages.join('\n'));
    }

    return ignore;
}

function get_gitignore_content({cwd}) {
    const gitignore_path = find_up('.gitignore', {cwd, noDirectories: true});

    let gitignore_content = null;
    try {
        gitignore_content = fs.readFileSync(gitignore_path).toString();
    } catch(e) {}

    return gitignore_content;
}

function find_up(filename, {onlyDirectories, noDirectories, cwd}) {
    assert_internal(filename);
    assert_internal(path_module.isAbsolute(cwd));

    /* TODO
    assert_not_implemented(!onlyDirectories);
    assert_not_implemented(!noDirectories);
    */

    const found_path = find_up_module.sync(filename, {cwd});

    assert_internal(found_path===null || found_path.constructor===String && path_module.isAbsolute(found_path));

    return found_path;
}
