const assert_internal = require('reassert/internal');
const assert_usage = require('reassert/usage');
const fs = require('fs');
const pathModule = require('path');
const {colorError} = require('@brillout/cli-theme');
const require_ = require('@brillout/require-gold');
const GOLDPAGE_BUILD_INFO_DIR = require('./GOLDPAGE_BUILD_INFO_DIR');
const STAMP_PATH_GOLDPAGE_IS_BUILDING = require('./STAMP_PATH_GOLDPAGE_IS_BUILDING');

let cache;

module.exports = getAssetInfos;

function getAssetInfos({outputDir, shouldBeProductionBuild, builtShouldBeFinished}) {
    const assetInfos = readAssetMap({outputDir, shouldBeProductionBuild, builtShouldBeFinished});
    assert_internal(assetInfos===null || assetInfos.constructor===Object);

    if( assetInfos===null ) {
      assert_internal(!builtShouldBeFinished);
      return {
        goldpageIsBuilding: isBuilding(outputDir),
        pagesNotBuilt: true,
      };
    }

    if( cache && cache.buildTime === assetInfos.buildTime ) {
        return cache;
    }

    assetInfos.staticAssetsDir = makePathAbsolute(assetInfos.staticAssetsDir, {outputDir});

    assetInfos.pageAssets = (
        Object.entries(assetInfos.pageAssets)
        .map(([pageName, assets]) => {
            let {pageFileTranspiled, pageFile, styles, scripts} = assets;
            assert_internal(pageFile);
            assert_internal(pageFileTranspiled);
            assert_internal(styles.length>=0);
            assert_internal(scripts.length>=0);

            pageFile = makePathAbsolute(pageFile, {outputDir});
            pageFileTranspiled = makePathAbsolute(pageFileTranspiled, {outputDir});

            const pageExport = require_(pageFileTranspiled, {skipCache: true});

            return {...assets, pageName, pageFileTranspiled, pageFile, pageExport};
        })
    );

    if( assetInfos.server ) {
        const keys = Object.keys(assetInfos.server);
        assert_internal(keys.length===1 && keys.includes('serverFileTranspiled'));
        assetInfos.server.serverFileTranspiled = (
            makePathAbsolute(assetInfos.server.serverFileTranspiled, {outputDir})
        );
    }

    cache = assetInfos;

    return assetInfos;
}

function makePathAbsolute(pathRelative, {outputDir}) {
    assert_internal(!pathModule.isAbsolute(pathRelative));
    assert_internal(outputDir);
    return pathModule.resolve(outputDir, pathRelative);
}

function readAssetMap({outputDir, shouldBeProductionBuild, builtShouldBeFinished}) {
    const assetMapPath = pathModule.resolve(outputDir, GOLDPAGE_BUILD_INFO_DIR, 'assetInfos.json');
    const assetMapContent = readFile(assetMapPath);
    assert_usage(
        assetMapContent!==null || !builtShouldBeFinished,
        colorError("You need to build your app")+". (E.g. by running `$ goldpage build`.)",
        "(No asset information file `"+assetMapPath+"` found which is generated when building.)"
    );
    if( assetMapContent===null ) {
      return null;
    }
    const assetInfos = JSON.parse(assetMapContent)
    assert_usage(
        !shouldBeProductionBuild || assetInfos.buildEnv==='production',
        'Your app has been built for "'+assetInfos.buildEnv+'" but you need to '+colorError("build your app for production")+".",
        "(E.g. by running `$ goldpage build`.)",
        "(The asset information file `"+assetMapPath+"` has `buildEnv` set to `"+assetInfos.buildEnv+"` but it should be `production`.)"
    );
    return assetInfos;
}

function isBuilding(outputDir) {
  const content = readFile(pathModule.resolve(outputDir, STAMP_PATH_GOLDPAGE_IS_BUILDING));
  if( content===null ) {
    return false;
  }
  assert_internal(content==='');
  return true;
}

function readFile(filepath) {
    try {
        return fs.readFileSync(filepath, 'utf8');
    } catch(e) {
        return null;
    }
}
