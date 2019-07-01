const assert_internal = require('reassert/internal');
const assert_tmp = assert_internal;
const log = require('reassert/log');
const {titleFormat} = require('@brillout/format-text');
const commondir = require('commondir');
const {colorEmphasis, strDir, colorWarning, colorError, symbolSuccess, symbolError, loadingSpinner} = require('@brillout/cli-theme');

module.exports = {Logger};

function Logger(opts) {
    if( this.constructor!==Logger ) {
      return new Logger(opts);
    }

    Object.assign(
        this,
        {
            onNewBuildState: new BuildStateManager(this),

            symbols: {
                success_symbol: symbolSuccess,
                failure_symbol: symbolError,
            },

            loading_spinner: {
                start_spinner,
                stop_spinner,
            },

            getBuildStartText,
            getBuildEndText,
            getEnvText,
            getRebuildingText,
            getRebuiltText,
            on_first_compilation_result,
            on_compilation_fail,
            on_first_compilation_success,
            on_re_compilation_success,
            log_config_and_stats: false,
            onlyLogFailure: false,
            showLoadingSpinner: false,
        },
        opts,
    );

    return this;

    function on_first_compilation_result({compilation_info, is_failure}) {
        if( this.log_config_and_stats || (global.DEBUG||{}).WEBPACK_CONFIG ) {
            log_compilation_info({compilation_info});
            return;
        }
        /*
        if( is_failure ) {
            log_compilation_info({compilation_info});
        }
        */
    }

    function on_compilation_fail({compilation_info}) {
        process.stdout.write('\n');
        log_error(compilation_info);
        process.stdout.write('\n');
        console.log(this.symbols.failure_symbol+'Build failed');
        process.stdout.write('\n');
    }

    function on_first_compilation_success({compilation_info}) {
        log_compilation_distribution.call(this, {compilation_info});
    }

    function on_re_compilation_success() {
        console.log(add_sucess_symbol.call(this, this.getRebuiltText()));
    }

    function add_sucess_symbol(text) {
        if( ! this.showLoadingSpinner ) {
          return text;
        }
        return this.symbols.success_symbol + text;
    }

    function log_compilation_info({compilation_info}) {
        compilation_info
        .filter(Boolean)
        .sort(({is_failure: is_failure_1}, {is_failure: is_failure_2}) => is_failure_1 - is_failure_2)
        .forEach(({webpack_config, webpack_stats, output}) => {
            process.stdout.write('\n');
            log_config(webpack_config);
            process.stdout.write('\n');
         // log_webpack_output(output);
         // process.stdout.write('\n');
            log_webpack_stats(webpack_stats);
        });
    }

    function log_error(compilation_info) {
        const erroredCompilations = (
            compilation_info
            .filter(Boolean)
            .filter(({is_failure}) => is_failure)
        );
        assert_internal(erroredCompilations.length>0);

        erroredCompilations
        .forEach(({runtimeError, webpack_stats}) => {
            if( runtimeError ) {
                log_runtime_error(runtimeError);
            } else {
                log_stats_errors({webpack_stats});
            }
        });
    }
    function log_runtime_error(runtimeError) {
        log_title('Error', {color: colorError});
        print_err(colorError(runtimeError.stack));
    }

    function log_compilation_distribution({compilation_info}) {
        const output_directories = (
            compilation_info
            .filter(Boolean)
            .map(compilationInfo => {
                assert_internal(compilationInfo.output, compilationInfo);
                assert_internal(compilationInfo.output.dist_root_directory, compilationInfo);
                return compilationInfo.output.dist_root_directory;
            })
        );
        const output_directory__base = commondir(output_directories);
        process.stdout.write(
            [
                this.log_config_and_stats && '\n',
                add_sucess_symbol.call(this, this.getBuildEndText()),
                /*
                output_directory__base && ' '+strDir(output_directory__base),
                this.getEnvText(),
                '\n\n',
                */
                '\n',
            ]
            .filter(Boolean).join('')
        );
    }

    function start_spinner(text) {
        loadingSpinner.start({text});
    }
    function stop_spinner() {
        loadingSpinner.stop();
    }
}

function getBuildStartText() {
    return 'Transpiling & Bundling';
}
function getBuildEndText() {
    return 'Code built';
}
function getEnvText() {
    assert_tmp(false);
    return ' (for '+colorEmphasis(get_build_env())+')';
}

function getRebuildingText() {
    return 'Re-building';
}

function getRebuiltText() {
    return 'Re-built';
}

function get_build_env() {
    return process.env.NODE_ENV || 'development';
}

function log_stats_errors({webpack_stats}) {
    const has_errors = webpack_stats.hasErrors();
    const has_warnings = webpack_stats.hasWarnings();
    assert_internal(has_errors);
    /*
    if( !has_errors && !has_warnings ) {
        return;
    }
    */

    const info = webpack_stats.toJson();

    if (has_warnings) {
        log_title('Warning');
        if( info.warnings.forEach ) {
            info.warnings.forEach(error => {
                print_warn(colorWarning(error));
            });
        } else {
            print_warn(info.warnings);
        }
    }

    if (has_errors) {
        log_title('Error');
        if( info.errors.forEach ) {
            info.errors.forEach(error => {
                const prefix = 'ERROR in ';
                print_err(colorError(prefix+error));
            });
        } else {
            print_err(info.errors);
        }
    }
}

function log_config(config) {
    assert_internal(config);
    log_title('Webpack Config');
    log(config);
}

function log_webpack_stats(webpack_stats) {
    if( ! webpack_stats ) {
        return;
    }

    log_title('Webpack Stats');
    print(webpack_stats.toString({colors: true, reasons: true}));
}

function log_webpack_output(output) {
    log_title('Webpack Output');
    log(output);
}

function clearLine() {
    const readline = require('readline');
    readline.clearLine(process.stdout);
    readline.cursorTo(process.stdout, 0);
}


function print() {
    //clearLine();
    console.log.apply(console, arguments);
}

function print_err() {
    console.error.apply(console, arguments);
}

function print_warn() {
    console.warn.apply(console, arguments);
}

function BuildStateManager(logger) {
    const logging_state = {
        has_logged_first_compilation_start: false,
        logging_is_compiling: false,
        has_been_successful_before: false,
        has_finished_compiled_before: false,
        isFailing: false,
    };

    return onNewBuildState;

    function onNewBuildState(new_state) {
        const {is_compiling, is_failure, compilation_info} = logger.build_state = new_state;

        assert_internal([true, false, undefined].includes(is_failure), {is_failure});
        /* This assertion is false:
        assert_internal(!is_compiling || is_failure===undefined, {is_failure, is_compiling});
        */
        assert_internal([true, false].includes(this.onlyLogFailure));
        const wasFailing = logging_state.isFailing;
        if( !is_compiling || is_failure ){
          logging_state.isFailing = !!is_failure;
        }
        // console.log({is_compiling, is_failure});
        let skipLogging = false;
        if( this.onlyLogFailure && !wasFailing && !is_failure ){
          skipLogging = true;
        }

        assert_internal(is_compiling || [true, false].includes(is_failure));

        if( is_compiling && ! logging_state.logging_is_compiling ) {
            logging_state.logging_is_compiling = true;
            let spinner_text;
            if( ! logging_state.has_logged_first_compilation_start ) {
                logging_state.has_logged_first_compilation_start = true;
                spinner_text = logger.getBuildStartText();//+logger.getEnvText();
            } else {
                spinner_text = logger.getRebuildingText();
            }
            assert_tmp(spinner_text);
            if( !skipLogging ){
              if( logger.showLoadingSpinner ) {
                logger.loading_spinner.start_spinner(spinner_text);
              } else {
                process.stdout.write(spinner_text);
              }
            }
        }

        if( ! is_compiling && ! logging_state.has_logged_first_compilation_start ) {
            return;
        }

        assert_compilation_info({compilation_info, is_compiling, is_failure});

        if( ! is_compiling && logging_state.logging_is_compiling ) {
            logging_state.logging_is_compiling = false;
            if( !skipLogging ){
              if( logger.showLoadingSpinner ) {
                logger.loading_spinner.stop_spinner();
              } else {
                clearLine();
              }
            }
        }

        if( ! is_compiling && ! logging_state.has_finished_compiled_before ) {
            if( !skipLogging ){
              logger.on_first_compilation_result({compilation_info, is_failure});
            }
            logging_state.has_finished_compiled_before = true;
        }

        if( ! is_compiling && is_failure ) {
            if( !skipLogging ){
              logger.on_compilation_fail({compilation_info});
            }
        }

        if( ! is_compiling && ! is_failure ) {
            if( !skipLogging ){
              if( ! logging_state.has_been_successful_before ) {
                  logger.on_first_compilation_success({compilation_info});
              } else {
                  logger.on_re_compilation_success();
              }
            }
            logging_state.has_been_successful_before = true;
        }

    }
}

function assert_compilation_info({compilation_info, is_compiling, is_failure}) {
    if( is_compiling ) {
        return;
    }
    assert_internal(compilation_info.constructor===Array, compilation_info);
    compilation_info.forEach(comp_info => {
        if( is_failure && comp_info === null ) {
            return;
        }
        assert_internal(comp_info, {comp_info, is_compiling, is_failure});
        assert_internal(comp_info.output, comp_info);
        assert_internal(comp_info.output.dist_root_directory, comp_info);
    });
}

function log_title(title, {color=s=>s}={}) {
    console.log(color(titleFormat(title)));
}
