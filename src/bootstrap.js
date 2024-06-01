import { join } from 'path';
import express from 'express';

import routes from './routes/index.js';

const jsonErrorHandler = (err, req, res, next) => {
  res.status(err.status ?? 500).json(err);
};

const app = express();
app.use('/', express.static(join(import.meta.dirname, '../public')));
app.use(express.json());
app.use('/', routes);
app.use(jsonErrorHandler);

export default app;
