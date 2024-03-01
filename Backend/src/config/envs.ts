import "dotenv/config";
import * as env from "env-var";

// Variables de entorno
export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  DB_DIALECT: env.get("DB_DIALECT").default("postgres").asString(),
  DB_HOST: env.get("DB_HOST").default("localhost").asString(),
  DB_PORT: env.get("DB_PORT").default(5432).asPortNumber(),
  DB_USERNAME: env.get("DB_USERNAME").required().asString(),
  DB_PASSWORD: env.get("DB_PASSWORD").required().asString(),
  DB_NAME: env.get("DB_NAME").required().asString(),
};
