const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const priceCoinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  last_updated_at: {
    type: Number
  }
},
  {
    versionKey: false,
    timestamps: true,
  });

const PriceCoin = mongoose.model("PriceCoin", priceCoinSchema);

module.exports = {
  PriceCoin
};
