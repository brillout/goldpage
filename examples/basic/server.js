const express = require('express');
const ssr = require('ssr-coin');

const app = express();

app.use(ssr.express);

app.listen(3000, () => {console.log('Server is running')});
