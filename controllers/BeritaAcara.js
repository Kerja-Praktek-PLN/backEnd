import Berita_Acara from "../models/BeritaAcara";
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
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid images" });
  if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

  try {
    const { nomor_tower, jumlah_tegakan, jarak_pohon_ke_konduktor } = req.body;

    if (isNaN(nomor_tower)) {
      return res.status(400).json({ msg: "nomor_tower must be a number" });
    }

    if (nomor_tower < 0) {
      return res.status(400).json({ msg: "nomor_tower must be positive" });
    }

    if (isNaN(jumlah_tegakan)) {
      return res.status(400).json({ msg: "jumlah tegakan must be a number" });
    }

    if (isNaN(jarak_pohon_ke_konduktor)) {
      return res.status(400).json({ msg: "jarak pohon ke konduktor must be a number" });
    }

    file.mv(`./public/images/${fileName}`),
      async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
          await Berita_Acara.create({ gambar_sebelum: url });
          res.status(201).json({ msg: "Berita_Acara created" });
        } catch (error) {}
      };
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
