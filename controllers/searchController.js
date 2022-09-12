const { Link } = require("../db/linkModel");
const moment = require("moment");
const { search } = require("../services/searchService");

const searchController = async (req, res) => {
  const { short: shortLink } = req.params;
  const findLink = await Link.findOne({ short: shortLink });
  if (!findLink) {
    return res
      .status(404)
      .json({ message: "the link does not exist in the database" });
  }

  if (findLink.token.timeOff < moment()) {
    return res
      .status(404)
      .json({ message: "this token has expired, the link is unavailable " });
  }
  const result = await search(shortLink);
  res.redirect(result.link);
};
module.exports = {
  searchController,
};
