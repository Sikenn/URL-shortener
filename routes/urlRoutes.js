const express = require("express");
const {
  postUrl,
  getUrl,
} = require("../controllers/urlControllers");

const router = express.Router();

router.post("/new", postUrl);
router.get("/:id", getUrl);

module.exports = router;
