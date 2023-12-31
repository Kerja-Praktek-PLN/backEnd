import express from "express";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import authRoutes from "./routes/Authentication.js";
import rowRouter from "./routes/MonitoringRow.js";
import BArouter from "./routes/BeritaAcara.js";
import multer from "multer";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connceted..");
} catch (error) {
  console.log(error);
}

// app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
app.use(authRoutes);
app.use(rowRouter);
app.use(BArouter);

app.listen(5000, () => console.log("Server running at port 5000"));
