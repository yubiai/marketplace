/**
 *
 * Endpoint methods
 */

const { PriceCoin } = require("../models/Pricecoin");

// All Prices
async function allPrices(req, res) {

  try {
    const prices = await PriceCoin.find();
    return res.status(200).json(prices);
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  allPrices
};
