const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    seller: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    item_id: {
      type: String,
      required: true
    },
    answer: {
      type: Object
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = {
  Question
};
