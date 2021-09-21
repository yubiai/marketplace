const { KlerosEscrow } = require("../utils/kleros-escrow");
const { saveOrder } = require("../services/transaction.service");
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
        const order = await saveOrder(orderInfo);
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