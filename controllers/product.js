const Product = require("../models/poducts");

exports.createPoduct = async (req, res) => {
  const fileName = file.filename;
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
};
