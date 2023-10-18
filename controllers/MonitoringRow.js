import Row from "../models/MonitoringRow.js";
import { ValidationError } from "sequelize";

export const getRow = async (req, res) => {
  try {
    const response = await Row.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRowById = async (req, res) => {
  try {
    const response = await Row.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createRow = async (req, res) => {
  try {
    const { nomor_tower, tanggal, nama_PIC, jumlah_tegakan, status_tegakan, jenis_pohon, jalur, jarak_pohon_ke_konduktor, tindak_lanjut } = req.body;

    // if (nomor_tower instanceof Number) {
    //   nomor_tower = Number(nomor_tower);
    //   return res.status(400).json({ msg: "nomor_tower must be a number" });
    // }

    // if (nomor_tower < 0) {
    //   return res.status(400).json({ msg: "nomor_tower must be positive" });
    // }

    // if (jumlah_tegakan instanceof Number) {
    //   jumlah_tegakan = Number(jumlah_tegakan);
    //   return res.status(400).json({ msg: "nomor_tower must be a number" });
    // }

    // if (jarak_pohon_ke_konduktor instanceof Number) {
    //   jarak_pohon_ke_konduktor = Number(jarak_pohon_ke_konduktor);
    //   return res.status(400).json({ msg: "nomor_tower must be a number" });
    // }

    await Row.create(req.body);
    res.status(201).json({ msg: "Row Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateRow = async (req, res) => {
  try {
    await Row.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Row updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteRow = async (req, res) => {
  try {
    await Row.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Row deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
