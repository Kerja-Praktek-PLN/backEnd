import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Row from "./MonitoringRow.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Berita_Acara = db.define(
  "Berita_Acara",
  {
    id_acara: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_PIC: {
      type: DataTypes.STRING,
    },
    id_users: {
      type: DataTypes.INTEGER,
    },
    nomor_tower: {
      type: DataTypes.INTEGER,
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
    tindak_lanjut: {
      type: DataTypes.ENUM("sudah pangkas", "sudah tebang"),
    },
    gambar_sebelum: {
      type: DataTypes.STRING,
    },
    gambar_setelah: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    // If don't want updatedAt
    updatedAt: false,
  }
);

// Tambahkan relasi dengan model MonitoringRow
Berita_Acara.hasOne(Row, { foreignKey: "nomor_tower" });
// Berita_Acara.belongsTo(Row, { foreignKey: "nomor_tower" });

Berita_Acara.hasOne(Users, { foreignKey: "nomor_tower" });
// Berita_Acara.belongsTo(Users, { foreignKey: "nomor_tower" });

export default Berita_Acara;
