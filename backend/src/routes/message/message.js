const express = require("express");
const router = express.Router();

const messageController = require("../../controllers/message.controller");

router.route("/:walletAddress").get(messageController.getMessage);
router.route("/:walletAddress").post(messageController.addMessage);

module.exports = router;
