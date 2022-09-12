const { Link } = require("../db/linkModel");

const search = async (shortLink) => {
  const result = await Link.findOne({ short: shortLink });
  result.clicks++;
  result.save();
  return result;
};
module.exports = {
  search,
};
