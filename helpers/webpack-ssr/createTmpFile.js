const tmp = require('tmp');
const pathModule = require('path');

tmp.setGracefulCleanup();

module.exports = createTmpFile;

function createTmpFile(path) {
  const filename = pathModule.basename(path);
  const filedir = pathModule.dirname(path);
  const tmpobj = tmp.fileSync({name: filename, dir: filedir});

  return {
    remove: () => tmpobj.removeCallback(),
  };
}
