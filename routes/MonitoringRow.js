import express from "express";
import { getRow, getRowById, createRow, updateRow, deleteRow } from "../controllers/MonitoringRow.js";

const rowRouter = express.Router();

rowRouter.get("/row", getRow);
rowRouter.get("/row/:id", getRowById);
rowRouter.post("/row", createRow);
rowRouter.put("/row/:id", updateRow);
rowRouter.delete("/row/:id", deleteRow);

export default rowRouter;
