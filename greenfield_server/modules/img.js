const mongoose = require("mongoose");
const connection = require("./connection");

const schema = new mongoose.Schema(
  {
    Base64Img: { type: String, required: true,unique: true },
    prompt: { type: String, required: true },
    userId: String,
  },
  { timestamps: true }
);
const Img = mongoose.model("Img", schema);

module.exports = Img;