import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5430,
  username: 'api',
  password: 'Admin123',
  database: 'api',
};

export default config;
