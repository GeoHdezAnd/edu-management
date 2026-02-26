import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import groupRoutes from "./routes/group.routes.ts";
import studentRoutes from "./routes/student.routes.ts";
import { runSeeds } from "./prisma/seeds.ts";

async function initServer() {
  dotenv.config();
  //Este archivo se usa para correr el backend en desarrollo permitiendo cambios al código en tiempo real
  const PORT = process.env.PORT || 4000;

  const app = express();
  app.use(express.json());

  await runSeeds();

  app.use("/api/group", groupRoutes);
  app.use("/api/student", studentRoutes);

  app.listen(PORT, () => {
    console.log(colors.cyan.bold(`REST API en el puerto ${PORT}`));
  });
}

export default initServer;
