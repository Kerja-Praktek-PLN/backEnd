import express from "express";
import { createTransmisi, createTransmisiMvar, createTransmisiMw, deleteMasterData, getTransmisi, getTransmisiById, getTransmisiMvar, getTransmisiMw, updateMasterData } from "../controllers/MasterData.js";

const masterDataRouter = express.Router();

masterDataRouter.get("/transmisi", getTransmisi);
masterDataRouter.get("/transmisi/:id", getTransmisiById);
masterDataRouter.post("/transmisi", createTransmisi);

masterDataRouter.get("/mvar", getTransmisiMvar);
masterDataRouter.get("/mw", getTransmisiMw);
masterDataRouter.post("/mvar", createTransmisiMvar);
masterDataRouter.post("/mw", createTransmisiMw);

masterDataRouter.put("/masterdata/:id", updateMasterData);
masterDataRouter.delete("/masterdata/:id", deleteMasterData);

export default masterDataRouter;
