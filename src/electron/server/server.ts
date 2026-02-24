import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import db from "./config/db.ts";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.blue.bold("Conexión a la base de datos exitosa"));
  } catch (_error) {
    console.log(_error);
    console.log(colors.red.bold("Fallo la conexión a la base de datos"));
  }
}

function initServer() {
  dotenv.config();
  connectDB();
  //Este archivo se usa para correr el backend en desarrollo permitiendo cambios al código en tiempo real
  const PORT = process.env.PORT || 4000;

  const app = express();
  app.use(express.json());

  app.listen(PORT, () => {
    console.log(colors.cyan.bold(`REST API en el puerto ${PORT}`));
  });
}

export default initServer;
