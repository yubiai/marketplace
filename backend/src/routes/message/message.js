const express = require("express");
const router = express.Router();

const messageController = require("../../controllers/message.controller");

router.route("/:orderId").get(messageController.getMessage);

// Add message in order 
router.route("/:orderId").put(messageController.addMessage);

module.exports = router;
