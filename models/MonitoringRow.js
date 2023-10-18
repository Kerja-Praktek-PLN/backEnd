import { Sequelize, ValidationError } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Row = db.define(
  "Monitoring_Row",
  {
    nomor_tower: {
      type: DataTypes.STRING,
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

// Row.addHook("beforeValidate", (row, options) => {
//   if (!["aman", "kritis"].includes(row.status_tegakan)) {
//     throw new ValidationError('Status Tegakan harus "aman" atau "kritis"');
//   }

//   if (!["bawah", "luar"].includes(row.jalur)) {
//     throw new ValidationError('Jalur harus "bawah" atau "luar"');
//   }

//   if (!["sudah pangkas", "sudah tebang"].includes(row.tindak_lanjut)) {
//     throw new ValidationError('Status Tegakan harus "sudah pangkas" atau "sudah tebang"');
//   }
// });

export default Row;
