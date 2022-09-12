const { Link } = require("../db/linkModel");
const { create } = require("../services/createService");

const createController = async (req, res) => {
  const { newLink } = req.body;
  const findLink = await Link.findOne({ link: newLink });
  if (findLink) {
    return res.redirect("/");
  }
  const result = await create(newLink);

  res.redirect("/");
};
module.exports = {
  createController,
};
