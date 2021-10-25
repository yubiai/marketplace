const express = require("express");
const router = express.Router();

const shippingController = require("../../controllers/shipping.controller");

router.route("/cost").get(shippingController.costShipping);




module.exports = router;
