const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
  status: {
    type: String,
    required: true,
    default: "Initial",
  },
  tracking_number: {
    type: String,
  },
  declared_value: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number
  },
  origin: {
    type: Object,
  },
  destination: {
    type: Object,
  },
  lead_time: {
    type: Object,
  },
});

const Shipping = mongoose.model("Shipping", shippingSchema);

module.exports = {
  Shipping,
};
