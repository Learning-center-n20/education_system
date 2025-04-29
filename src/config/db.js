import { Sequelize } from "sequelize";
const vars = process.env;

export const database = new Sequelize({
  database: vars.DB_NAME,
  host: vars.DB_HOST,
  port: vars.DB_PORT,
  password: vars.DB_PASSWORD,
  username: vars.DB_USERNAME,
  dialect: vars.DB_DIALECT,
  logging: false
});

export const connectionDb = () => {
  try {
    database.authenticate();
    console.log("DB connection success");
  } catch (error) {
    console.log("Failed connect db");
    process.exit(1);
  }
};
