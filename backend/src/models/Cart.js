const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      type: String,
      trim: true,
      default: "",
      required: "The userId associated with the cart",
    },
    orderId: {
      type: String,
      trim: true,
    },
    articles: [
      {
        articleId: {
          type: String,
          required: "The articlelId added to the cart",
          trim: true,
        },
        quantity: {
          type: Number,
        },
        validated: {
          type: Boolean,
          default: false,
        },
      },
    ],
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "cart",
    versionKey: false,
    timestamps: true,
  }
);

cartSchema.index({ userId: 1, enabled: -1 });
cartSchema.index({ userId: 1, orderId: 1 });

/**
 * Add an item to the cart
 */
cartSchema.methods.addArticle = function (article) {
  for (let _i = 0; _i < this.articles.length; _i++) {
    const element = this.articles[_i];
    if (element.articleId == article.articleId) {
      element.quantity = Number(element.quantity) + Number(article.quantity);
      return;
    }
  }

  this.articles.push(article);
  return;
};

/**
 * Decrease or Remove an item from the cart
 */
cartSchema.methods.decrementArticle = function (article) {
  for (let _i = 0; _i < this.articles.length; _i++) {
    const element = this.articles[_i];
    if (element.articleId == article.articleId) {
      element.quantity--;
      if (element.quantity <= 0) {
        this.articles.splice(_i, 1);
      }
      return;
    }
  }
};

/**
 * Remove an item from the cart
 */
cartSchema.methods.removeArticle = function (articleId) {

  for (let _i = 0; _i < this.articles.length; _i++) {
    const element = this.articles[_i];

    if (element.articleId == articleId) {
      this.articles.splice(_i, 1);
      return;
    }

  }
  return

};

const Cart = mongoose.model("Cart", cartSchema);

module.exports = {
  Cart,
};
