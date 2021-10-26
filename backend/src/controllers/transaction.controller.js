const { KlerosEscrow } = require('../utils/kleros-escrow')
const { saveOrder } = require('../services/transaction.service')
const KlerosEscrowInstance = KlerosEscrow(new Web3())

async function confirmOrder(req, res) {
  try {
    const { transactionId } = { ...req.body }

    const data = await KlerosEscrowInstance.executeTransaction(transactionId)

    res.status().json({
      message: 'ok',
      response: data,
    })
  } catch (error) {
    console.log('Error confirm order >>> ', error)
    res.status(400).json({
      message: error,
    })
  }
}

async function saveOrder(req, res) {
  try {
    const orderInfo = { ...req.body }

    const order = await saveOrder(orderInfo)

    res.status(200).json({
      message: 'ok',
      response: order,
    })
  } catch (error) {
    console.log('Error save order >>> ', error)
  }
}

module.exports = {
  confirmOrder,
  saveOrder
}
