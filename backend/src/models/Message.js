const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  order_id: {
    type: String,
    required: true
  },
  buyer_user: {
    type: String,
    required: true
  },
  seller_user: {
    type: String,
    required: true
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  messages: [
    {
      date: String,
      user: String,
      message: String
    }
  ]
});

const Message = mongoose.model("Message", messageSchema);

module.exports = {
  Message,
};
