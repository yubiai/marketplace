const express = require("express");
const router = express.Router();

const cartController = require("../../controllers/cart.controller");

router.route("/").get(cartController.getCarts);

router.route("/cart/:userId").get(cartController.getCart);

router
  .route("/article/increment")
  .put(cartController.incrementArticle);

router
  .route("/article/decrement")
  .put(cartController.decrementArticle);

router
  .route("/article/delete")
  .put(cartController.deleteArticle);

module.exports = router;
