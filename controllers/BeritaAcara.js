import Berita_Acara from "../models/BeritaAcara.js";
import path from "path";
import db from "../config/Database.js";
import MonitoringRow from "../models/MonitoringRow.js";
import { Op } from "sequelize";

export const getBA = async (req, res) => {
  try {
    const filter = {};
    if (req.query.rute) filter.where = { ...filter.where, rute_transmisi: req.query.rute };
    if (req.query.tanggal) {
      const today = new Date(req.query.tanggal);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      filter.where = {
        ...filter.where,
        createdAt: {
          [Op.gte]: today,
          [Op.lt]: tomorrow,
        },
      };
    }
    const beritaAcara = await Berita_Acara.findAll(filter);
    const monitoringRow = await MonitoringRow.findAll({
      where: {
        ba_id: {
          [Op.in]: beritaAcara.map((item) => item.id),
        },
      },
    });

    const response = beritaAcara.map((item) => {
      return {
        ...item.dataValues,
        monitoringRow: monitoringRow.filter((data) => data.ba_id === item.id),
      };
    });
    res.status(200).json(response);
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
};

export const getBAById = async (req, res) => {
  try {
    const { id } = req.params;
    const beritaAcara = await Berita_Acara.findOne({ where: { id: id } });
    const monitoringRow = await MonitoringRow.findAll({
      where: {
        ba_id: beritaAcara.id,
      },
    });

    const response = beritaAcara;
    res.status(200).json(response);
  } catch (error) {
    res.json({
      msg: error.message,
    });
  }
};

export const createBA = async (req, res) => {
  // const file = req.files.file;
  // const fileSize = file.data.length;
  // const ext = path.extname(file.name);
  // const fileName = file.md5 + ext;
  // const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  // if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid images" });
  // if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

  try {
    const { nomor_tower, nama_PIC, id_users, rute_transmisi, tindak_lanjut, tanggal } = req.body;

    if (isNaN(nomor_tower)) {
      return res.status(400).json({ msg: "nomor_tower must be a number" });
    }

    if (nomor_tower < 0) {
      return res.status(400).json({ msg: "nomor_tower must be positive" });
    }
    var gambar_sebelum;
    var gambar_setelah;
    if (!req.files.gambar_setelah || !req.files.gambar_sebelum) {
      gambar_sebelum = "http://localhost:5000/images/test.jpg";
      gambar_setelah = "http://localhost:5000/images/test.jpg";
    } else {
      gambar_setelah = "http://localhost:5000/images/" + req.files.gambar_setelah[0].filename;
      gambar_sebelum = "http://localhost:5000/images/" + req.files.gambar_sebelum[0].filename;
    }

    await Berita_Acara.create({
      nama_PIC,
      id_users,
      nomor_tower,
      tindak_lanjut,
      gambar_sebelum,
      gambar_setelah,
      rute_transmisi,
      createdAt: new Date(tanggal),
    });
    res.status(201).json({ msg: "Berita_Acara created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateBA = async (req, res) => {
  try {
    const { nomor_tower, nama_PIC, id_users, rute_transmisi, tindak_lanjut } = req.body;
    const newData = {
      nomor_tower,
      nama_PIC,
      id_users,
      rute_transmisi,
      tindak_lanjut,
    };
    if (req.files.gambar_setelah || req.files.gambar_sebelum) {
      newData.gambar_setelah = "http://localhost:5000/images/" + req.files.gambar_setelah[0].filename;
      newData.gambar_sebelum = "http://localhost:5000/images/" + req.files.gambar_sebelum[0].filename;
    }
    await Berita_Acara.update(newData, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ msg: "asdf" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteBA = async (req, res) => {
  try {
    const check = await Berita_Acara.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!check) throw Error("Bad request");
    const result = await Berita_Acara.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!result) throw Error("Internal Server Error");
    res.status(200).json({ result: "data deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};
