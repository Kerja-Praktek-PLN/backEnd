import express from "express";

const router = express.Router();

router.get("/images/:imageName", (req, res) => {
  const { imageName } = req.params;
  const imagePath = path.join(__dirname, "public", "images", imageName);
  res.sendFile(imagePath);
});

export default router;
