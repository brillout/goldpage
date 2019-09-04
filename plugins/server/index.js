require('@goldpage/hapi');
const serverFile = require.resolve('./server');

const config = require('@brillout/reconfig');

config.goldpage.serverEntryFile = serverFile;
