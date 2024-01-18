import Berita_Acara from "../models/BeritaAcara.js";
import Master_Data from "../models/MasterData.js";
import Tower from "../models/Tower.js";
import User_Model from "../models/UserModel.js";
import "../models/Relations.js";
import db from "../config/Database.js";
import MonitoringRow from "../models/MonitoringRow.js";
import Users from "../models/UserModel.js";

(async () => {
  await db.sync({ force: true });
})();
