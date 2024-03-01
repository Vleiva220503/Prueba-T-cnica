import { envs } from "./envs";

const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: envs.DB_DIALECT,
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USERNAME,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  define: {
    timestamps: true,
  },
});

export default sequelize;
