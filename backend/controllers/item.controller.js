const { Payment } = require("../models/Payment");

const items = {
  '1': {id: 1, url: 'http://UrlToDownloadItem1'},
  '2': {id: 2, url: 'http://UrlToDownloadItem2'},  
};

async function getPaymendId(req, res, next) {
  try {

    const paymentId = (Math.random() * 10000).toFixed(0);
    const paymentData = await new Payment({
      id: paymentId,
      itemId: req.params.itemId,
      paid: false,
    });

    paymentData.save();

    res.status(200).json({
      paymentId,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getItemUrl(req, res) {
  try {
    //1. verify paymentId exist in db and has been paid
    const payment = await Payment.findOne({id: req.params.paymentId});
    //2. return url to download item
    if (payment && payment.paid === true) {
      res.status(200).json({
        url: items && items[payment.itemId] && items[payment.itemId].url,
      });
    } else {
      res.status(400).json({
        message: "Ups hubo un error!",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getPaymendId,
  getItemUrl,
};
