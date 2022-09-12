const express = require("express");
const router = express.Router();

const { createController } = require("../controllers/createController");

router.post("/", createController);

module.exports = router;
