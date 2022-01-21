const express = require("express");
const router = express.Router();

const create = require("../controllers/Product");
const get = require("../controllers/Product");

router.post("/", create);
router.get("/:id", get);

module.exports = router;
