import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { Sequelize } from "sequelize";

// Recrear __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "database.sqlite"),
});

console.log();
export default db;
