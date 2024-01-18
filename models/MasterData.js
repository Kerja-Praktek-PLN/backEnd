import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Data = db.define(
  "Master_Data",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_users: {
      type: DataTypes.INTEGER,
    },
    nama_GI: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.ENUM("normal", "mw", "mvar"),
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: true,
  }
);

export default Data;
