const express = require('express');
const ssr = require('goldpage');

const app = express();
app.use(ssr.express);
app.listen(3001, () => {console.log('Server is running.')});
