import app from './index.js';

import syncTableDatabase from './database/sync-table-database.js';

const port = 3000;

const initServer = async () => {
  await syncTableDatabase()
  app.listen(port, error => {
    console.log('App is running');
  })
};

initServer();