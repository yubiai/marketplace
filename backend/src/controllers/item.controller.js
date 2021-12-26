const { Category } = require("../models/Category");
const { Item } = require("../models/Item");
const { Payment } = require("../models/Payment");

const items = {
  1: { id: 1, url: "http://UrlToDownloadItem1" },
  2: { id: 2, url: "http://UrlToDownloadItem2" },
};

// All get Products
async function getItem(req, res) {
  try {
    const item = await Item.find({});

    res.status(200).json({
      status: "ok",
      result: item,
    });
  } catch (error) {
    res.status(400).json({
      message: "Ups Hubo un error!",
      error: error,
    });
  }
}

// Add Product
async function postItem(req, res) {
  try {
    const searchCategory = await Category.find({
      categoryId: req.query.categoryId,
    });

    const reqFiles = [];

    for (let index = 0; index < req.files.length; index++) {
      reqFiles.push(req.files[index].filename);
    }

    const item = new Item({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      condition: req.body.condition,
      picture: reqFiles,
    });

    searchCategory.map(async (e) => {
      item.category.push(e._id);
      let category = await Category.findById(e._id);
      category.items.push(item);
      await category.save();
      await item.save();
    });

    res.status(200).json({
      message: "Item agregado con éxito!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Ups Hubo un error!",
      error: error,
    });
  }
}

// One Product by SLUG
async function getItemSlug(req, res) {
  try {
    const item = await Item.find({ slug: req.params.slug });

    res.status(200).json({
      status: "ok",
      result: item,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Ups Hubo un error!",
      error: error,
    });
  }
}

// Others functions
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
    const payment = await Payment.findOne({ id: req.params.paymentId });
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
  getItem,
  postItem,
  getItemSlug,
};
