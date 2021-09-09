const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  condition: String,
  categories: [{
      type: Schema.Types.Mixed,
      ref: "Categorie"
  }],
  picture: String,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = {
  Item,
};
