const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorieSchema = new Schema({
  title: String,
  description: String,
  permalink: String,
  categoryId: { type: Number, default: 0 },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
})

const Category = mongoose.model('Category', categorieSchema)

module.exports = {
  Category,
}
