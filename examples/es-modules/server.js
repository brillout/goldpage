import express from 'express';
import ssr from 'goldpage';

const app = express();

// Goldpage also has middlewares for Koa, Hapi, etc.
app.use(ssr.express);

app.listen(3000, () => {console.log('Server is running')});
