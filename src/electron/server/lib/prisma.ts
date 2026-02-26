import "dotenv/config";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./../generated/prisma/client.ts";
import colors from "colors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "../");
const dbPath = join(projectRoot, process.env.DATABASE_URL?.replace("file:", "") || "prisma/dev.db");
console.log(colors.magenta(`Archivo de base de datos en: ${dbPath}`));
const adapter = new PrismaBetterSqlite3({ url: dbPath });
const prisma = new PrismaClient({ adapter });

export { prisma };
