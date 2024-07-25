import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Use the credentials from the provided screenshot
const dbHost: string =
  process.env.DB_HOST ?? "aws-0-ap-southeast-1.pooler.supabase.com";
const dbDatabase: string = process.env.DB_DATABASE ?? "postgres";
const dbUsername: string =
  process.env.DB_USERNAME ?? "postgres.xzsxfqcbflndsionlmkb";
const dbPassword: string = process.env.DB_PASSWORD ?? ""; // Ensure to add the actual password here
const dbPort: number = Number(process.env.DB_PORT) || 6543;

export const sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: "postgres",
});

require("./src/models/Product");

export const connectToDatabase = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });

  sequelize
    .sync({
      force: true,
    })
    .then(() => {
      require("./src/seeds/productSeed");
      console.log("Database synchronized successfully.");
    })
    .catch((err) => {
      console.error("Unable to synchronize the database:", err);
    });
};
