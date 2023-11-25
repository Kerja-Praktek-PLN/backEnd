import Transmisi from "../models/Transmisi";

export const getTransmisi = async (req, res) => {
  try {
    const response = await Transmisi.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransmisiById = async (req, res) => {
  try {
    const response = await Transmisi.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransmisi = async (req, res) => {
  try {
    await Transmisi.create(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateTransmisi = async (req, res) => {
  try {
    await Transmisi.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transmisi updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteTransmisi = async (req, res) => {
  try {
    await Transmisi.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transmisi deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
