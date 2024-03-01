import cors from "cors";
import express from "express";
import morgan from "morgan";
import sequelize from "./config/database"; // Importa la configuración de Sequelize

// Import routes
import characterRoute from "./routes/character.route";

// Create Express server
const app = express();

// Express configurationa
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Define routes
app.use("/api/v1", characterRoute);

// Test database connection
sequelize
  .sync()
  .then(() => {
    console.log("Tablas creadas");
  })
  .catch((err: Error) => {
    console.error("Error al crear las tablas", err);
  });
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión exitosa con la base de datos.");
  })
  .catch((err: Error) => {
    console.error("Error al conectar con la base de datos:", err);
  });

// Export express instance
export default app;
