import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Row = db.define(
  "Monitoring_Row",
  {
    nomor_tower: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    tanggal: {
      type: DataTypes.STRING,
    },
    nama_PIC: {
      type: DataTypes.STRING,
    },
    jumlah_tegakan: {
      type: DataTypes.INTEGER,
    },
    status_tegakan: {
      type: DataTypes.ENUM("aman", "kritis"),
    },
    jenis_pohon: {
      type: DataTypes.STRING,
    },
    jalur: {
      type: DataTypes.ENUM("bawah", "luar"),
    },
    jarak_pohon_ke_konduktor: {
      type: DataTypes.FLOAT,
    },
    tindak_lanjut: {
      type: DataTypes.ENUM("sudah pangkas", "sudah tebang"),
    },
  },
  {
    freezeTableName: true,
    // If don't want updatedAt
    updatedAt: false,
  }
);

export default Row;
