const mongoose = require("mongoose");
const randomstring = require("randomstring");

const linkShema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  token: {
    token: { type: String },
    date: { type: Date },
    timeOff: { type: Date },
  },
});

const Link = mongoose.model("links", linkShema);

module.exports = {
  Link,
};
