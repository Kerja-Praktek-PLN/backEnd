import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/Images");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    return cb(null, `${Date.now()}_${file.originalname}.${extension}`);
  },
});

// const upload = multer({ storage });

export default storage;
