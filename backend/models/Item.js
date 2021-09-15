const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  condition: String,
  picture: String,
  categories: [{
      type: Schema.Types.Mixed,
      ref: "Categorie"
  }]
});

const Item = mongoose.model("Item", itemSchema);

module.exports = {
  Item,
};
