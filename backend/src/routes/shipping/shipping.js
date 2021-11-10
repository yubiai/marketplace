const express = require("express");
const router = express.Router();

const shippingController = require("../../controllers/shipping.controller");

router.route("/cost").get(shippingController.costShipping);
router.route("/newshipping").post(shippingController.newShipping);
router.route("/getlabel").get(shippingController.getLabel);
router.route("/getlabel").get(shippingController.getLabel);
router.route("/cancel").post(shippingController.cancelShipping);
router.route("/status").post(shippingController.statuShipping);
router.route("/historystatus").post(shippingController.historyShipping);

module.exports = router;
