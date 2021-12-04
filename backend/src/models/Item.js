const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const itemSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  condition: String,
  picture: Array,
  seller: String,
  status: String,
  slug: {
    type: String,
    unique: true,
    slug: 'title',
  },
  category: [
    {
      type: Schema.Types.Mixed,
      ref: 'category',
    },
  ],
})

const Item = mongoose.model('Item', itemSchema)

module.exports = {
  Item,
}
