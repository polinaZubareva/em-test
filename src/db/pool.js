import pkg from 'pg';
import { ENV } from '../constants/env.constants';

const { Pool } = pkg;

const databaseConnection = new Pool({
  database: ENV.database,
  user: ENV.user,
  port: ENV.port,
  password: ENV.password,
  host: 'localhost',
});

export default databaseConnection;
