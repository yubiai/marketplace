const express = require("express");
const router = express.Router();

const cartController = require("../../controllers/cart.controller");

// Rutes
router.route("/").get(cartController.getCarts);

router.route("/cart/:userId").get(cartController.getCart);

router.route("/article/increment").put(cartController.incrementArticle);

router.route("/article/decrement").put(cartController.decrementArticle);

router.route("/article/delete").put(cartController.deleteArticle);

router.route("/cart/:userId/validate").get(cartController.validateCheckout);

module.exports = router;
