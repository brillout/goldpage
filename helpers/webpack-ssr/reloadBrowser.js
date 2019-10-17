const reloadBrowser = require('@rebuild/serve/utils/autoreload/reloadBrowser');
const DEFAULT_AUTO_RELOAD_PORT = require('./DEFAULT_AUTO_RELOAD_PORT');

module.exports = ({autoReloadPort=DEFAULT_AUTO_RELOAD_PORT}) => {
  reloadBrowser({autoReloadPort});
};
