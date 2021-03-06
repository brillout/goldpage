const getAssetInfos = require('webpack-ssr/getAssetInfos');
const config = require('@brillout/reconfig');
const assert = require('reassert');

module.exports = getBuildInfo;

function getBuildInfo({shouldBeProductionBuild, builtShouldBeFinished}={}) {
    const outputDir = config.goldpage.buildDir;
    assert.internal(outputDir);

    const assetInfos = getAssetInfos({outputDir, shouldBeProductionBuild, builtShouldBeFinished});

    if( assetInfos.pagesNotBuilt ) {
        return assetInfos;
    }

    const {pageAssets, ...assetInfos__rest} = assetInfos;
    const pages__fullProps = get_pages({pageAssets});

    return {...assetInfos__rest, pages__fullProps};
}

function get_pages({pageAssets}) {
  const pages__fullProps = (
    pageAssets
    .map(({pageName, pageFile, pageFileTranspiled, pageExport: pageConfig, styles, scripts}) => {
      const pageFullProps = {
        ...config.goldpage.defaultPageConfig,
        ...pageConfig,
        pageName,
        pageFile,
        pageFileTranspiled,
        pageConfig,
      };

      Object.assign(
        pageFullProps,
        {
          scripts: (
            makeUnique([
              ...(scripts||[]),
              ...(pageFullProps.scripts||[]),
            ])
          ),
          styles: (
            makeUnique([
              ...(styles||[]),
              ...(pageFullProps.styles||[])
            ])
          ),
        }
      );

      return pageFullProps;
    })
  );

  return pages__fullProps;
}
function makeUnique(paths) {
    return [...new Set(paths)];
}
