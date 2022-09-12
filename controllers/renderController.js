const { Link } = require("../db/linkModel");
const { create } = require("../services/createService");

const renderController = async (req, res) => {
  const links = await Link.find();

  res.render("index", { links: links });
};
module.exports = {
  renderController,
};
