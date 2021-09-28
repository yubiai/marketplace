const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  condition: String,
  picture: String,
  category: [{
      type: Schema.Types.Mixed,
      ref: "category"
  }]
});

const Item = mongoose.model("Item", itemSchema);

module.exports = {
  Item,
};
