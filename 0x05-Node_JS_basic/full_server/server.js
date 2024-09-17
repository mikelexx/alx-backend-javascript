import express from 'express';
import process from 'process';
import router from './routes/index';

const [, , dbPath] = process.argv;

const app = express();

app.use(router);
app.locals.dbPath = dbPath;

app.listen(1245);

export default app;
