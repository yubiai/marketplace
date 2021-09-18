const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieSchema = new Schema({
  title: String,
  description: String,
});

const Categorie = mongoose.model("Categorie", categorieSchema);

module.exports = {
  Categorie,
};
