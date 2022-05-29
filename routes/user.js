const router = require("express").Router();
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  let hashedPassword = await bcrypt.hash(password.toString(), 10);
  try {
    user = new User({
      email,
      name,
      password: hashedPassword,
    });
    console.log(user);
    const result = await user.save();
    if (result) {
      res.json(result);
    }
  } catch (err) {
    res.json(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.json("user not found");
    }
    if (password.length < 6) {
      return res.json("password is too Short ");
    }

    let correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return res.json("password is wrong ");
    }

    if (correctPassword && user) {
      const token = jwt.sign(user.id, process.env.JWT_SECRET);
      return res.json({ message: "logged in successfully", token: token });
    }
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
