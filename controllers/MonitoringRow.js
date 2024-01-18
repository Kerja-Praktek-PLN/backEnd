import Berita_Acara from "../models/BeritaAcara.js";
import MonitoringRow from "../models/MonitoringRow.js";

export const getRow = async (req, res) => {
  try {
    const filter = {};
    if (req.query.rute_transmisi) {
      filter.where = {
        rute_transmisi: req.query.rute_transmisi,
      };
    }
    const response = await MonitoringRow.findAll(filter);

    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRowById = async (req, res) => {
  try {
    const response = await MonitoringRow.findOne({
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
    const { nomor_tower, ba_id, jumlah_tegakan, jarak_pohon_ke_konduktor, tanggal, nama_PIC, status_tegakan, jenis_pohon, jalur, rute_transmisi, tindak_lanjut } = req.body;
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

    await MonitoringRow.create({
      nomor_tower,
      jumlah_tegakan,
      jarak_pohon_ke_konduktor,
      tanggal,
      nama_PIC,
      status_tegakan,
      jenis_pohon,
      jalur,
      rute_transmisi,
      ba_id: ba_id,
      tindak_lanjut,
    });
    res.status(201).json({ msg: "Row Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

export const updateRow = async (req, res) => {
  try {
    await MonitoringRow.update(req.body, {
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
    await MonitoringRow.destroy({
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
