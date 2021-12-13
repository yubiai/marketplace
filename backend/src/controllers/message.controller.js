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
  const { user } = req.query;
  let result

  try {
    let messages = await Message.findOne({ order_id: orderId });
    let message = {
      date: new Date(),
      user: user,
      text: req.body.text
    }

    if (messages){
      messages.messages.push(message);
      result = await messages.save(messages);
    } else {
      messages = {
        order_id: orderId,
        messages: [
          message
        ]
      }
      let newMessages = new Message(messages);
      result = await newMessages.save(newMessages);
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error)
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
