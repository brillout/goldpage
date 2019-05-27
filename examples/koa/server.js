const Koa = require('koa');
const ssr = require('goldssr');

const app = new Koa();
app.use(ssr.koa);
const server = app.listen(3000);

console.log('Server running');

module.exports = server;
