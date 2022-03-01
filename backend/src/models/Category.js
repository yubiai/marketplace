const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const categorySchema = new Schema({
  title: String,
  description: String,
  permalink: String,
  categoryId: { type: String, default: 0 },
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

const Category = mongoose.model('Category', categorySchema)

module.exports = {
  Category,
}
