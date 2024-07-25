"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Use the credentials from the provided screenshot
const dbHost = (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : "aws-0-ap-southeast-1.pooler.supabase.com";
const dbDatabase = (_b = process.env.DB_DATABASE) !== null && _b !== void 0 ? _b : "postgres";
const dbUsername = (_c = process.env.DB_USERNAME) !== null && _c !== void 0 ? _c : "postgres.xzsxfqcbflndsionlmkb";
const dbPassword = (_d = process.env.DB_PASSWORD) !== null && _d !== void 0 ? _d : ""; // Ensure to add the actual password here
const dbPort = Number(process.env.DB_PORT) || 6543;
exports.sequelize = new sequelize_1.Sequelize(dbDatabase, dbUsername, dbPassword, {
    host: dbHost,
    port: dbPort,
    dialect: "postgres",
});
require("./src/models/Product");
const connectToDatabase = () => {
    exports.sequelize
        .authenticate()
        .then(() => {
        console.log("Connection has been established successfully.");
    })
        .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });
    exports.sequelize
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
exports.connectToDatabase = connectToDatabase;
