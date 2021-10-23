const { Cart } = require("../models/Cart");
const ObjectId = require("mongoose").Types.ObjectId;

//
async function currentCart(userId) {
  return new Promise((resolve, reject) => {
    Cart.findOne(
      {
        userId: userId,
        enabled: true,
      },
      function (err, cart) {
        if (err) return reject(err);

        if (!cart) {
          const result = new Cart();
          result.userId = userId;
          result.save(function (err) {
            if (err) return reject(err);
            resolve(result);
          });
        } else {
          /*     Validar Articulos */
          resolve(cart);
        }
      }
    );
  });
}

//

// All get Carts
async function getCarts(req, res) {
  try {
    const Carts = await Cart.find({});

    res.status(200).json({
      status: "ok",
      result: Carts,
    });
  } catch (error) {
    res.status(400).json({
      message: "Ups Hubo un error!",
      error: error,
    });
  }
}

async function getCart(req, res) {
  const { userId } = req.params;

  if (!ObjectId.isValid(userId)) {
    return res.status(404).json({ error: "Not Object userId" });
  }

  try {
    const cart = await Cart.find({
      userId,
    });
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function incrementArticle(req, res) {
  let data = req.body;

  try {
    if (!ObjectId.isValid(data.userId)) {
      return res.status(404).json({ error: "Not Object ID User" });
    }

    const cart = await currentCart(data.userId);

    const article = {
      articleId: req.body.itemId,
      quantity: req.body.quantity,
    };

    cart.addArticle(article);

    await cart.save();

    return res.status(200).json("Incremented article successfully");
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function decrementArticle(req, res) {
  let data = req.body;

  try {
    if (!ObjectId.isValid(data.userId)) {
      return res.status(404).json({ error: "Not Object ID User" });
    }

    const cart = await currentCart(data.userId);

    const article = {
      articleId: req.body.itemId,
    };

    cart.decrementArticle(article);

    await cart.save();

    return res.status(200).json("Decrement article successfully");
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function deleteArticle(req, res) {
  let data = req.body;

  try {
    if (!ObjectId.isValid(data.userId)) {
      return res.status(404).json({ error: "Not Object ID User" });
    }

    const cart = await currentCart(data.userId);

    cart.removeArticle(data.itemId);

    await cart.save();

    return res.status(200).json("Delete article successfully");
  } catch (error) {
    return res.status(404).json(error);
  }
}

async function validateCheckout(req, res) {
  const { userId } = req.params;

  console.log(data)

  try {
    if (!ObjectId.isValid(userId)) {
      return res.status(404).json({ error: "Not Object ID User" });
    }

    const cart = await currentCart(userId);
    // falta validar cada articulo si existe el stock para el proximo paso.
    console.log(cart)
    return res.status(200).json("Cart Validate");
  } catch (error) {
    return res.status(404).json(error);
  }
}

module.exports = {
  getCarts,
  getCart,
  incrementArticle,
  decrementArticle,
  deleteArticle,
  validateCheckout
};
