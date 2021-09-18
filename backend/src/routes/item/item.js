const express = require("express");
const router = express.Router();

const itemController = require("../../controllers/item.controller");
const upload = require("../../middlewares/upload");

router.route("/item")
    .get(itemController.getItem)
    .post(upload, itemController.postItem)

router.route("/getPaymentId/:itemId")
    .get(itemController.getPaymendId)

router.route("/getItemUrl/:paymentId")
    .get(itemController.getItemUrl)

module.exports = router;
