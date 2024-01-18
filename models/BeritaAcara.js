import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Row from "./MonitoringRow.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Berita_Acara = db.define(
  "Berita_Acara",
  {
    nama_PIC: {
      type: DataTypes.STRING,
    },
    id_users: {
      type: DataTypes.INTEGER,
    },
    nomor_tower: {
      type: DataTypes.INTEGER,
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
    rute_transmisi: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    updatedAt: false,
  }
);

export default Berita_Acara;
