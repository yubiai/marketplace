const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* Transaction */
const transactionSchema = new Schema({
  id: String,
  transactionId: String,
  addressOrigin: String,
  addressDestination: String
});

const Transaction = mongoose.model("Transaction", transactionSchema);

/* Product order */
const productOrderSchema = new Schema({
    id: String,
    product: Object,
    quantity: Number
});
const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);

/* Order */
const orderSchema = new Schema({
  id: String,
  products: Array,
  orderDate: Date,
  deliveryDate: Date,
  transaction: Object
});
const Order = mongoose.model("Order", orderSchema);

module.exports = {
    Order,
    ProductOrder,
    Transaction
};
