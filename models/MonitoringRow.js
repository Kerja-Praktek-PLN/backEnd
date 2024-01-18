import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Berita_Acara from "./BeritaAcara.js";

const { DataTypes } = Sequelize;

const MonitoringRow = db.define(
  "Monitoring_Row",
  {
    nomor_tower: {
      type: DataTypes.INTEGER,
    },
    tanggal: {
      type: DataTypes.DATE,
    },
    nama_PIC: {
      type: DataTypes.STRING,
    },
    jumlah_tegakan: {
      type: DataTypes.INTEGER,
    },
    ba_id: {
      type: DataTypes.INTEGER,
    },
    status_tegakan: {
      type: DataTypes.ENUM("aman", "kritis", "b1", "b2"),
    },
    jenis_pohon: {
      type: DataTypes.STRING,
    },
    jalur: {
      type: DataTypes.ENUM("bawah", "luar"),
    },
    rute_transmisi: {
      type: DataTypes.STRING,
    },
    jarak_pohon_ke_konduktor: {
      type: DataTypes.DECIMAL(5, 2),
    },
    tindak_lanjut: {
      type: DataTypes.ENUM("sudah pangkas", "sudah tebang"),
    },
  },
  {
    freezeTableName: true,
    updatedAt: false,
  }
);

export default MonitoringRow;
