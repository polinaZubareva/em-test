import express, { Application } from 'express';
import ENVAPP from './src/constants/env.app.js';
import { router } from './src/app.route';
import databaseConnection from './src/db/pool.js';
import { createTableActions } from './src/db/actionQueries';
import { createTable } from './src/db/userQueries';

const app: Application = express();
const port: number = ENVAPP.port || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

async function startApplication() {
  let retries = 3;
  try {
    while (retries) {
      try {
        await databaseConnection
          .query(createTable)
          .catch((err: Error) => {
            throw new Error(err.message);
          });
        await databaseConnection
          .query(createTableActions)
          .catch((err: Error) => {
            throw new Error(err.message);
          });
        break;
      } catch (error) {
        console.log(error);
        retries -= 1;
        await new Promise((res) => {
          setTimeout(res, 3000);
        });
      }
    }

    app.listen(port, () => {
      console.log(`Application started on PORT ${port}`);
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

startApplication();
