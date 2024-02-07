import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config'


console.log(process.env.DB_USER);

export const dataSourceOptions: PostgresConnectionOptions = {
  "type": "postgres",
  "host": process.env.HOST,
  "port": parseInt(process.env.PORT) || 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "entities": ["dist/**/*.entity.js"],
  "migrations": ["dist/migrations/*.js"],
  "migrationsTableName": "migrations"
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;