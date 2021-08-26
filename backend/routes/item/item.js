const express = require("express");
const router = express.Router();

const itemController = require("../../controllers/item.controller");

router.route("/getPaymentId/:itemId")
    .get(itemController.getPaymendId);

router.route("/getItemUrl/:paymentId")
    .get(itemController.getItemUrl)

module.exports = router;
