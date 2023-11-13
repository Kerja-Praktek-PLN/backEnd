import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Data = db.define(
  "Master_Data",
  {
    id_data: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomor_transmisi: {
      type: DataTypes.INTEGER,
    },
    id_users: {
      type: DataTypes.INTEGER,
    },
    nama_GI: {
      type: DataTypes.STRING,
    },
    nama_transmisi: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    last_update: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
  }
);

export default Data;
