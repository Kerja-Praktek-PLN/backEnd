import express from "express";
import multer from "multer";
import { getBA, getBAById, createBA, updateBA, deleteBA } from "../controllers/BeritaAcara.js";
import storage from "../config/Multer.js";
const upload = multer({ storage });
const BArouter = express.Router();

BArouter.get("/BA", getBA);
BArouter.get("/BA/:id", getBAById);
BArouter.post(
  "/BA",
  upload.fields([
    {
      name: "gambar_sebelum",
      maxCount: 1,
    },
    {
      name: "gambar_setelah",
      maxCount: 1,
    },
  ]),
  createBA
);
BArouter.get("/BA/images/:id", getBAById);
BArouter.patch("/BA/:id", updateBA);
BArouter.delete("/BA/:id", deleteBA);

export default BArouter;
