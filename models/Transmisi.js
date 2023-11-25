import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transmisi = db.define(
  "Transmisi",
  {
    name: {
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
  }
);

export default Transmisi;
