const assert_internal = require('reassert/internal');
const assert_usage = require('reassert/usage');
const assert_warning = require('reassert/warning');
const deepEqual = require('deep-equal');
const fs = require('fs');

const chalk = require('chalk');
const serve = require('@rebuild/serve');
const build = require('@rebuild/build');
const {Logger} = require('@rebuild/build/utils/Logger');


module.exports = {IsoBuilder};


function IsoBuilder() {
    const latestRun = {runNumber: 0, runPromise: null};

    const isRebuild = {value: false};

    const isoBuilder = this;

    const browserBuild = new BuildManager({
        buildName: 'browserBuild',
        buildFunction: ({webpackConfig, onCompilationStateChange}) => (
            serve(webpackConfig, {
                doNotCreateServer: true,
                doNotGenerateIndexHtml: true,
                doNotFireReloadEvents: true,
                doNotIncludeAutoreloadClient: true,
                doNotWatchBuildFiles: isoBuilder.doNotWatchBuildFiles,
                logger: null,
                onCompilationStateChange,
                compilationName: 'browserCompilation',
            })
        ),
        onBuildBegin,
        onBuildFail,
        onSuccessfullWatchChange,
    });

    const nodejsBuild = new BuildManager({
        buildName: 'nodejsBuild',
        buildFunction: ({webpackConfig, onCompilationStateChange}) => {
            assert_usage(
              [true, false, undefined].includes(isoBuilder.doNotWatchBuildFiles)
            );
            assert_warning(
              !(
                isProduction() &&
                isoBuilder.doNotWatchBuildFiles===false
              ),
              "You can't enable watching when building for production.",
            );
            const watch = (
              !isProduction() && !isoBuilder.doNotWatchBuildFiles
            );
            return (
              build(webpackConfig, {
                  watch,
                  doNotGenerateIndexHtml: true,
                  logger: null,
                  onCompilationStateChange,
                  compilationName: 'nodejsCompilation',
                  loadEntryPoints: isoBuilder.loadNodejsEntryPoints,
              })
            );
        },
        onBuildBegin,
        onBuildFail,
        onSuccessfullWatchChange,
    });

    this.build = startAll;

    return this;

    async function startAll() {
        try {
          return (
              await buildAll({
                  isoBuilder,
                  latestRun,
                  nodejsBuild,
                  browserBuild,
                  isRebuild,
              })
          );
        } catch(err) {
          console.error(err);
          // We have to manually terminate the process because webpack won't do so.
          // (startAll is run in a Webpack callback.)
          process.exit();
        }
    }

    function onBuildFail() {
        onBuildStart__already_called = false;
        const {logger} = isoBuilder;
        const browserCompilationInfo = browserBuild.getCompilationInfo();
        const nodejsCompilationInfo = nodejsBuild.getCompilationInfo();
        log_state_fail({logger, browserCompilationInfo, nodejsCompilationInfo});
    }

    function onBuildBegin() {
        onBuildStart({isoBuilder});
    }

    function onSuccessfullWatchChange(buildName) {
        (global.DEBUG||{}).WATCH && console.log('REBUILD-REASON: webpack-watch for `'+buildName+'`');
        startAll();
    }
}

function BuildManager({buildName, buildFunction, onSuccessfullWatchChange, onBuildFail, onBuildBegin}) {
    const _compiler = new WebpackCompilerWithCache();

    const that = Object.assign(this, {
        runBuild,
        getCompilationInfo: () => null,
    });

    return this;

    async function runBuild({webpackConfig, runIsOutdated}) {
        assert_usage(webpackConfig);
        assert_internal(runIsOutdated);

        (global.DEBUG||{}).WATCH && console.log(chalk.bold.cyan('RUN-START ')+buildName);

        that.getCompilationInfo = () => {
            if( runIsOutdated() ) {
                return null;
            }
            return _compiler.getInfo();
        };

        if( runIsOutdated() ) return abortRun();

        await _compiler.updateCompiler({
            webpackConfig,
            getWebpackCompiler: buildFunction,
            compilationStateChangeListener,
        });
        if( runIsOutdated() ) return abortRun();

        await _compiler.waitSuccessfullCompilation();
        if( runIsOutdated() ) return abortRun();
        const compilationInfo = _compiler.getInfo();
        if( compilationInfo.is_compiling ) {
            // Seems like runIsOutdated() can be true here
            //  - Not sure if that makes sense?
            // Setting `dontAssertRunIsOutdated: true` to avoid the assertion inside `abortRun` to fail
            return abortRun({dontAssertRunIsOutdated: true});
        }

        (global.DEBUG||{}).WATCH && console.log(chalk.bold.blue('RUN-END ')+buildName+' '+_compiler.getCompilerId());

        const entryPoints = getEntryPoints(compilationInfo);
        return entryPoints;

        function compilationStateChangeListener(compilationInfo) {
            if( runIsOutdated() ) {
                return;
            }

            const {is_compiling, is_failure, is_first_success} = compilationInfo;

            if( is_compiling ) {
                onBuildBegin();
            }

            if( ! is_compiling && is_failure ) {
                (global.DEBUG||{}).WATCH && console.log(chalk.bold.red('RUN-FAIL ')+_compiler.getCompilerId());
                onBuildFail();
            }

            if( !is_compiling && !is_first_success && !is_failure ) {
                onSuccessfullWatchChange(buildName);
            }
        }

        function abortRun({dontAssertRunIsOutdated}={}) {
            assert_internal(dontAssertRunIsOutdated || runIsOutdated());
            (global.DEBUG||{}).WATCH && console.log(chalk.bold.magenta('RUN-ABORT ')+buildName);
            return Promise.resolve({abortBuilder: true});
        }

        function getEntryPoints(compilationInfo) {
            assert_compilationInfo(compilationInfo);
            assert_internal(compilationInfo.is_compiling===false);
            assert_internal(!compilationInfo.is_failure);
            assert_internal(compilationInfo.is_failure===false);
            const {entry_points} = compilationInfo.output;
            assert_internal(entry_points);
            return entry_points;
        }
    }
}

function WebpackCompilerWithCache() {
    let _compilation_info = null;

    let webpackCompiler_last;
    let getWebpackCompiler_last;

    let stateChangeListener;

    Object.assign(this, {
        getInfo,
        updateCompiler,
        getCompilerId,
        waitSuccessfullCompilation,
    });

    return this;

    async function updateCompiler({webpackConfig, getWebpackCompiler, compilationStateChangeListener}) {
        /*
        if( webpackCompiler_last ) {
            await sleep({seconds: 0.2});
        }
        */

        webpackCompiler_last = await getCompiler({webpackConfig, getWebpackCompiler});
        getWebpackCompiler_last = getWebpackCompiler;
        stateChangeListener = compilationStateChangeListener;
    }

    function getInfo() {
        assert_compilationInfo(_compilation_info);
        return _compilation_info;
    }
    function waitSuccessfullCompilation() {
        return webpackCompiler_last.wait_successfull_compilation();
    }
    function getCompilerId() {
        return webpackCompiler_last.compilerId.toString();
    }

    async function getCompiler({webpackConfig, getWebpackCompiler}) {
        if( webpackCompiler_last ) {
            if( deepEqual(webpackCompiler_last.webpack_config, webpackConfig) && getWebpackCompiler===getWebpackCompiler_last ) {
                (global.DEBUG||{}).WATCH && console.log('WEBPACK-COMPILER-REUSE '+getCompilerId());
                return webpackCompiler_last;
            } else {
                (global.DEBUG||{}).WATCH && console.log('WEPACK-COMPILER-STOP '+getCompilerId());
                const resolveTimeout = gen_timeout({desc: 'Stop Compiler '+getCompilerId()});
                await webpackCompiler_last.stop_compilation();
                resolveTimeout();
                const {output: {path: webpackOutputPath}={}} = webpackCompiler_last.webpack_config;
                assert_internal(webpackOutputPath);
                fs__remove(webpackOutputPath);
            }
        }

        const webpackCompiler = (
            getWebpackCompiler({
                webpackConfig,
                onCompilationStateChange: compilationInfo => {
                    assert_internal(build_function_called);
                    assert_compilationInfo(compilationInfo);
                    assert_internal(compilationInfo!==null);

                    const compilerId = webpackCompiler.compilerId.toString();
                    const compilerId__last = getCompilerId();

                    const {is_compiling, is_failure, is_first_success} = compilationInfo;

                    (global.DEBUG||{}).WATCH && console.log('COMPILATION-STATE-CHANGE '+JSON.stringify({is_compiling, is_failure, is_first_success, compilerId, compilerId__last}));

                    if( compilerId !== compilerId__last ) {
                        return;
                    }

                    _compilation_info = compilationInfo;
                    assert_internal(_compilation_info);

                    stateChangeListener(compilationInfo);
                },
            })
        );
        assert_internal(webpackCompiler.stop_compilation);
        assert_internal(webpackCompiler.wait_compilation);
        assert_internal(webpackCompiler.wait_successfull_compilation);
        assert_internal(webpackCompiler.webpack_config);
        assert_internal(webpackCompiler.compilerId);

        let build_function_called = true;

        (global.DEBUG||{}).WATCH && console.log('WEBPACK-COMPILER-NEW '+webpackCompiler.compilerId.toString());

        return webpackCompiler;
    }
}

async function buildAll({isoBuilder, latestRun, browserBuild, nodejsBuild, isRebuild}) {
    (global.DEBUG||{}).WATCH && console.log(chalk.bold('START-OVERALL-BUILDER'));

    await waitOnLatestRun(latestRun);

    const logger = isoBuilder.logger = isoBuilder.logger || Logger();

    onBuildStart({isoBuilder});

    const runNumber = latestRun.runNumber + 1;
    const runIsOutdated = () => runNumber !== latestRun.runNumber;
    const {promise: runPromise, resolvePromise: resolveRunPromise} = gen_promise();
    latestRun.runNumber = runNumber;
    latestRun.runPromise = runPromise;

    const buildForNodejs = (
        webpackConfig =>
            nodejsBuild.runBuild({webpackConfig, runIsOutdated})
    );
    const buildForBrowser = (
        webpackConfig =>
            browserBuild.runBuild({webpackConfig, runIsOutdated})
    );

    assert_usage(isoBuilder.builder);
    const generator = isoBuilder.builder({buildForNodejs, buildForBrowser});

    let resolvedValue;
    let isAborted = true;
    while( true ) {
        const yieldVal = generator.next(resolvedValue);
        if( yieldVal.done ) {
            assert_internal(!yieldVal.value);
            isAborted = false;
            break;
        }
        const currentPromise = yieldVal.value;
        assert_usage(currentPromise && currentPromise.then);
     // const resolveTimeout = gen_timeout({desc: 'Builder Promise'});
        resolvedValue = await currentPromise.then();
     // resolveTimeout();
        if( resolvedValue && resolvedValue.abortBuilder ) {
            assert_internal(runIsOutdated());
            break;
        }
        if( runIsOutdated() ) {
            break;
        }
    }

    resolveRunPromise({isAborted});

    await waitOnLatestRun(latestRun);

    const isOutdated = runIsOutdated();
    (global.DEBUG||{}).WATCH && console.log(chalk.bold("END-OVERALL-BUILDER "+(isOutdated?"[OUTDATED]":"[LATEST]")));
    if( ! isOutdated ) {
        log_state_end({logger, nodejsBuild, browserBuild});

        const isFirstBuild = !isRebuild.value;
        isRebuild.value = true;
        onBuildStart__already_called = false;
        if( isoBuilder.onBuildDone ) {
            /*await */isoBuilder.onBuildDone({isFirstBuild});
        }
    }
}

let onBuildStart__already_called;
function onBuildStart({isoBuilder}) {
    if( isoBuilder.onBuildStart && !onBuildStart__already_called ) {
        isoBuilder.onBuildStart();
        onBuildStart__already_called = true;
    }

    const {logger} = isoBuilder;
    log_state_start({logger});
}

function log_state_end({logger, nodejsBuild, browserBuild}) {
    const nodejsCompilationInfo = nodejsBuild.getCompilationInfo();
    const browserCompilationInfo = browserBuild.getCompilationInfo();
    assert_internal(nodejsCompilationInfo);
    assert_internal(browserCompilationInfo);

    // TODO-LATER - think this through: Is this avoidable?
    if( nodejsCompilationInfo.is_compiling || browserCompilationInfo.is_compiling ) {
        return;
    }

    assert_internal(nodejsCompilationInfo.is_compiling===false);
    assert_internal(browserCompilationInfo.is_compiling===false);
    logger.onNewBuildState({
        is_compiling: false,
        is_failure: false,
        compilation_info: [nodejsCompilationInfo, browserCompilationInfo],
    });
}
function log_state_start({logger}){
    logger.onNewBuildState({
        is_compiling: true,
    });
}
function log_state_fail({logger, browserCompilationInfo, nodejsCompilationInfo}) {
    assert_compilationInfo(browserCompilationInfo);
    assert_compilationInfo(nodejsCompilationInfo);
    const is_failure = (browserCompilationInfo||{}).is_failure || (nodejsCompilationInfo||{}).is_failure;
    assert_internal(is_failure===true);

    const is_compiling = (browserCompilationInfo||{}).is_compiling || (nodejsCompilationInfo||{}).is_compiling;

    /*
    console.log('F', is_compiling);
    if( is_compiling ) {
        return;
    }
    */

    logger.onNewBuildState({
        is_compiling,
        is_failure: true,
        compilation_info: [browserCompilationInfo, nodejsCompilationInfo],
    });
}


async function waitOnLatestRun(latestRun) {
    const {runNumber} = latestRun;
    if( ! latestRun.runPromise ) {
        latestRun.runNumber===0;
        return;
    }
    const {isAborted} = await latestRun.runPromise;
    if( latestRun.runNumber !== runNumber ) {
        return waitOnLatestRun(latestRun);
    }
    assert_internal(isAborted===false);
}

function assert_compilationInfo(compilationInfo) {
    if( compilationInfo === null ) {
        return;
    }
    assert_internal([true, false].includes(compilationInfo.is_compiling));
    if( compilationInfo.is_compiling ) {
        return;
    }
    assert_internal([true, false].includes(compilationInfo.is_failure));
    assert_internal(compilationInfo.output, compilationInfo);
    assert_internal(compilationInfo.output.dist_root_directory);
    assert_internal(compilationInfo.output.entry_points);
}


function fs__remove(path) {
    if( fs__file_exists(path) ) {
        fs.unlinkSync(path);
    }
}
function fs__file_exists(path) {
    try {
        return fs.statSync(path).isFile();
    }
    catch(e) {
        return false;
    }
}
function gen_timeout({timeoutSeconds=30, desc}={}) {
    if( ! (global.DEBUG||{}).WATCH ) return () => {};
    const timeout = setTimeout(() => {
        assert_warning(false, "Promise \""+desc+"\" still not resolved after "+timeoutSeconds+" seconds");
    }, timeoutSeconds*1000)
    return () => clearTimeout(timeout);
}
function gen_promise() {
    let promise_resolver;
    const promise = new Promise(resolve => promise_resolver=resolve);
    assert_internal(promise_resolver);
    return {promise, resolvePromise: promise_resolver};
}
/*
function sleep({seconds}) {
    const {promise, resolvePromise} = gen_promise();
    setTimeout(resolvePromise, seconds*1000);
    return promise;
}
*/
function isProduction() {
   return process.env.NODE_ENV === 'production';
}
