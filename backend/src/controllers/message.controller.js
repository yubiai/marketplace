const { Message } = require("../models/Message");

async function getMessage(req, res) {
  const { orderId } = req.params;

  try {
    const message = await Message.findOne({ order_id: orderId });

    res.status(200).json({
      status: "ok",
      result: message,
    });
  } catch (error) {
    res.status(400).json({
      message: "Ups Hubo un error!",
      error: error,
    });
  }
}

async function addMessage(req, res) {
  const { orderId } = req.params;

  try {
    const message = await Message.findOne({ order_id: orderId });

    res.status(200).json({
      status: "ok",
      result: message,
    });
  } catch (error) {
    res.status(400).json({
      message: "Ups Hubo un error!",
      error: error,
    });
  }
}

module.exports = {
  getMessage,
  addMessage
};
