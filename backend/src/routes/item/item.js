const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const type = upload.single('recfile');

const itemController = require("../../controllers/item.controller");
// const upload = require("../../middlewares/upload");

router.route("/item")
    .get(itemController.getItem)
    .post(type, itemController.postItem)

router.route("/item/:slug")
    .get(itemController.getItemSlug)

router.route("/getPaymentId/:itemId")
    .get(itemController.getPaymendId)

router.route("/getItemUrl/:paymentId")
    .get(itemController.getItemUrl)

module.exports = router;
