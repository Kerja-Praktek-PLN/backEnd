import Berita_Acara from "../models/BeritaAcara.js";
import path from "path";

export const getBA = async (req, res) => {
  try {
    const response = await Berita_Acara.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBAById = async (req, res) => {
  try {
    const response = await Berita_Acara.findOne({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    console.log(error.message);
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
    const { nomor_tower, jumlah_tegakan } = req.body;
    console.log(req.files);
    if (isNaN(nomor_tower)) {
      return res.status(400).json({ msg: "nomor_tower must be a number" });
    }

    if (nomor_tower < 0) {
      return res.status(400).json({ msg: "nomor_tower must be positive" });
    }

    if (isNaN(jumlah_tegakan)) {
      return res.status(400).json({ msg: "jumlah tegakan must be a number" });
    }
    await Berita_Acara.create({
      nama_PIC: req.body.nama_PIC,
      id_users: req.body.id_users,
      nomor_tower: req.body.nomor_tower,
      jumlah_tegakan: req.body.jumlah_tegakan,
      status_tegakan: req.body.status_tegakan,
      jenis_pohon: req.body.jenis_pohon,
      jalur: req.body.jalur,
      tindak_lanjut: req.body.tindak_lanjut,
      gambar_sebelum: "http://localhost:5000/BA/Images" + req.files.gambar_sebelum[0].filename,
      gambar_setelah: "http://localhost:5000/BA/Images" + req.files.gambar_setelah[0].filename,
    });
    res.status(201).json({ msg: "Berita_Acara created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateBA = async (req, res) => {
  try {
    await Berita_Acara.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteBA = async (req, res) => {
  try {
    await Berita_Acara.destroy({
      where: {
        id: req.params.id,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
