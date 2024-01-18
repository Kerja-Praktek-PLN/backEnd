import express from "express";
import { editTowerData, getAllTower } from "../controllers/Tower.js";

const towerController = express.Router();

towerController.get("/tower", getAllTower);
towerController.put("/tower/:id", editTowerData);

export default towerController;
