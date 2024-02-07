import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config'

export const dataSourceOptions: PostgresConnectionOptions = {
  "type": "postgres",
  "host": process.env.HOST,
  "port": parseInt(process.env.DB_PORT) || 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["dist/**/*.entity.js"],
  "migrations": ["dist/migrations/*.js"],
  "migrationsTableName": "migrations",
  "ssl": process.env.SSL_ENABLED === "true"
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;