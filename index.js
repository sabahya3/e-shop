const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const productRouter = require("./routes/product.js");
const authRoutes = require("./routes/user.js");
const authorized = require("./helper/jwt.js");

const port = process.env.PORT || 4000;
const host = process.env.HOST;

const app = express();

//middle ware
app.use(morgan("tiny"));

app.use(bodyParser.json());

app.use(authorized);

app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

app.use("/product", productRouter);

app.use("/auth", authRoutes);

mongoose.connect(process.env.DB_KEY, () => {
  app.listen(port, function (err) {
    if (err) {
      console.log("db connected");
    }

    console.log("server is running at host " + host + "at port :" + port);
  });
});
