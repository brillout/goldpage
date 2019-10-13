const express = require('express');
const ssr = require('goldpage');

const app = express();

app.get('/express-route', function (req, res) {
  res.send('hello from express route.')
});

app.use(ssr.express);

app.get('/express-route-404', function (req, res) {
  res.send("I will never be shown because I'm defined after goldpage's middleware.")
});

app.listen(3000, () => {console.log('Server is running.')});
