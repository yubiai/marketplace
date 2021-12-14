const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    order_id: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    messages: [
      {
        date: String,
        user: String,
        text: String,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = {
  Message,
};
