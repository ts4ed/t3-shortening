const { Link } = require("../db/linkModel");
const randomstring = require("randomstring");
const moment = require("moment");

const create = async (newLink) => {
  const token = {
    token: randomstring.generate(6),
    date: moment(),
    timeOff: moment().add(30, "days"),
  };
  const short = randomstring.generate(6);
  const result = new Link({
    link: newLink,
    token: token,
    short: short,
  });
  await result.save();
  return result;
};
module.exports = {
  create,
};
