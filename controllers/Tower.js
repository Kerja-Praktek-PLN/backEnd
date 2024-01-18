import Towers from "../models/Tower.js";

export const getAllTower = async (req, res) => {
  try {
    const result = await Towers.findAll({});
    res.json(result);
  } catch (error) {
    res.json({ error: error });
  }
};

export const editTowerData = async (req, res) => {
  try {
    const { jumlah, name } = req.body;
    const { id } = req.params;
    const result = await Towers.update(
      { jumlah, name },
      {
        where: { id },
      }
    );
    res.json(result);
  } catch (error) {
    res.json({ error: error });
  }
};
