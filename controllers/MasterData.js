import MasterData from "../models/MasterData.js";

export const getTransmisi = async (req, res) => {
  try {
    var where = { category: "normal" };
    if (req.query.GI) where.nama_GI = req.query.GI;
    const response = await MasterData.findAll({
      where,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getTransmisiMw = async (req, res) => {
  try {
    var where = { category: "mw" };
    if (req.query.GI) where.nama_GI = req.query.GI;
    const response = await MasterData.findAll({
      where,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransmisiMvar = async (req, res) => {
  try {
    var where = { category: "mvar" };
    if (req.query.GI) where.nama_GI = req.query.GI;
    const response = await MasterData.findAll({
      where,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransmisiById = async (req, res) => {
  try {
    const response = await MasterData.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransmisiMw = async (req, res) => {
  try {
    const { name, link, lastUpdate, nama_GI } = req.body;

    const result = await MasterData.create({
      name,
      link,
      nama_GI,
      last_update: lastUpdate,
      category: "mw",
    });

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
export const createTransmisiMvar = async (req, res) => {
  try {
    const { name, link, lastUpdate, nama_GI } = req.body;

    const result = await MasterData.create({
      name,
      link,
      nama_GI,
      last_update: lastUpdate,
      category: "mvar",
    });

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const createTransmisi = async (req, res) => {
  try {
    const { name, link, lastUpdate, nama_GI } = req.body;

    const result = await MasterData.create({
      name,
      link,
      nama_GI,
      last_update: lastUpdate,
      category: "normal",
    });

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateMasterData = async (req, res) => {
  try {
    const { name, link, nama_GI } = req.body;
    const result = await MasterData.update(
      {
        name,
        link,
        nama_GI,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(result);
    res.status(200).json({ msg: "MasterData updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteMasterData = async (req, res) => {
  try {
    await MasterData.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "MasterData deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
