const express = require("express");
const cors = require("cors");
const createRouter = require("./routes/createRouter");
const renderRouter = require("./routes/renderRouter");
const searchRouter = require("./routes/searchRouter");
const { Link } = require("./db/linkModel");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use("/", renderRouter);
app.use("/create", createRouter);
app.use("/", searchRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;
