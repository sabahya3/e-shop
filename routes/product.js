const router = require("express").Router();
const Product = require("../models/poducts");
//const productController = require("../controllers/product");

// file upload
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.get("/", (req, res) => {
  res.json({ name: "hello", age: 20 });
});

router.post("/", uploadOptions.single("myImage"), async (req, res) => {
  if (!req.file) {
    res.json("undefined");
  } else {
    const fileName = req.file.filename;
    const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
    const product = Product({
      title: req.body.title,
      image: `${basePath}${fileName}`,
      description: req.body.description,
    });
    try {
      const result = await product.save();
      res.json(result);
    } catch (err) {
      res.json("an error occured");
    }
    console.log(req.file.filename);
  }
});

module.exports = router;
