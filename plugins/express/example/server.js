// Example of adding ssr-coin to a express server.

const express = require('express');
const ssr = require('ssr-coin');

const app = express();

// ssr-coin has middlewares also for Koa, Hapi, etc.
app.use(ssr.express);

app.listen(3000, () => {console.log('Server is running')});
