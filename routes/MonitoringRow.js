import express from "express";
import { getRow, getRowById, createRow, updateRow, deleteRow } from "../controllers/MonitoringRow.js";

const router = express.Router();

router.get("/row", getRow);
router.get("/row/:id", getRowById);
router.post("/row", createRow);
router.patch("/row/:id", updateRow);
router.delete("/row/:id", deleteRow);

export default router;
