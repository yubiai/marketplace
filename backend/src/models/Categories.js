const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const categorieSchema = new Schema({
  title: String,
  description: String,
  permalink: String,
  categoryId: { type: Number, default: 0 },
  slug: {
    type: String,
    unique: true,
    slug: "title",
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }]
})

const Category = mongoose.model('Category', categorieSchema)

module.exports = {
  Category,
}
