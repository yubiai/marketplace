const express = require("express");
const {
  allPrices
} = require("../../controllers/pricecoin.controller");
const router = express.Router();

// New question added
router.route("/").get(allPrices);


module.exports = router;