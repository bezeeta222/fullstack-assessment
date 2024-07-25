import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectToDatabase } from "./database";
import api from "./src/routes/api";
import cors from "cors";

dotenv.config();
connectToDatabase();

const app: Express = express();

const port = process.env.PORT || 8000;

const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

// Enable CORS
app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", api);

app.get("/", (req: Request, res: Response) => {
  res.send("API");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
