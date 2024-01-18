import Berita_Acara from "./BeritaAcara.js";
import MonitoringRow from "./MonitoringRow.js";

Berita_Acara.hasMany(MonitoringRow, { foreignKey: "ba_id" });
MonitoringRow.belongsTo(Berita_Acara, { foreignKey: "ba_id" });
