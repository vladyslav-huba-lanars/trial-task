import app from './bootstrap.js';
import config from './config.js';

Error.stackTraceLimit = Infinity;

process.on('unhandledRejection', (rej) => {
  throw rej;
});

app.listen(config.port, () => {
  console.log(`Running on port ${config.port}`);
});
