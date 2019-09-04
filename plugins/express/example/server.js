const express = require('express');
const ssr = require('goldpage');

const app = express();

// ssr-coin also has middlewares for Koa, Hapi, etc.
app.use(ssr.express);

app.listen(3000, () => {console.log('Server is running')});
