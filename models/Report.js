import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Report = db.define(
  "Report",
  {
    nama_GI: {
      type: DataTypes.STRING,
    },
    jumlah_tower: {
      type: DataTypes.INTEGER,
    },
    nomor_tower: {
      type: DataTypes.INTEGER,
    },
    last_update: {
      type: DataTypes.STRING,
    },
    edited_at: {
      type: DataTypes.DATE,
    },
    deleted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Report;
