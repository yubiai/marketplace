const express = require("express");
const router = express.Router();

const transactionController = require("../../controllers/transaction.controller");

router.route("/transactions/confirm")
    .post(transactionController.confirmOrder);

router.route("/orders/create")
    .post(transactionController.saveOrder);

module.exports = router;