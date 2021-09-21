const { Order, ProductOrder, Transaction } = require("../models/Order");

async function saveOrder (orderInfo={}) {
    const productOrders = [];
    const transaction = await new Transaction({
        ...orderInfo.transactionInfo
    });
    transaction.save();

    orderInfo.products.forEach(async (_product) => { 
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
    return order;
}

module.exports = {
    saveOrder
};