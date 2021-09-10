const { Transaction } = require("../models/Transaction");
const { Order, ProductOrder } = require("../models/Order");

const { KlerosEscrow } = require("../utils/kleros-escrow");

const klerosEscrowInstance = KlerosEscrow(new Web3());

// When a seller confirm a transaction (sending an order shipping)
// the transaction should complete
async function confirmOrder(req, res, next) {
    const { transactionId } = {...req.body};
    try {
        await klerosEscrowInstance.executeTransaction(transactionId);
        res.status(200);
    } catch (e) {
        console.log(e);
        res.status(400);
    }
    next();
}

async function saveOrder(req, res, next) {
    const orderInfo = { ...req.body };
    try {
        const productOrders = [];
        const transaction = await new Transaction({
            ...orderInfo.transactionInfo
        });
        transaction.save();

        orderInfo.products.forEach(_product => { 
            const product = await new ProductOrder({
                ..._product
            });
            product.save();
            productOrders.push(product);
        });
        const order = await new Order({
            products: productOrders,
            transaction: transaction,
            orderDate: new Date(),
            deliveryDate: new Date()
        });
        order.save();
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(400);
    }
    next();
}

module.exports = {
    saveOrder,
    confirmOrder
};