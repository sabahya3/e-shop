const mongoose = require("mongoose");

const User = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      msg: "sorry enter a correct email address",
    },
  },
  name: { type: String, required: true },

  password: { type: String, required: true, minlength: 8 },
});

module.exports = mongoose.model("User", User);
