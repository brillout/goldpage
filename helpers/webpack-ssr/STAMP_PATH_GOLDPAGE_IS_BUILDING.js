const pathModule = require('path');
const GOLDPAGE_BUILD_INFO_DIR = require('./GOLDPAGE_BUILD_INFO_DIR');

const STAMP_PATH_GOLDPAGE_IS_BUILDING = pathModule.join(GOLDPAGE_BUILD_INFO_DIR, 'goldpageIsBuilding');

module.exports = STAMP_PATH_GOLDPAGE_IS_BUILDING;

