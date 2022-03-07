import axios from 'axios';

const SERVER_ENDPOINT = (
  process.env.REACT_APP_BE_SERVER || 'http://localhost:4000');

export const cartService = {
  getCarts,
  getCart,
  incrementArticle,
  decrementArticle,
  deleteArticle,
  validateCheckout
};

async function getCarts() {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/carts/`);
}

async function getCart(userId) {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/carts/cart/${userId}`);
}

async function incrementArticle(payload = {}) {
  return await axios.put(
    `${SERVER_ENDPOINT}/api/carts/article/increment`,
    { ...payload }
  );
}

async function decrementArticle(payload = {}) {
  return await axios.put(
    `${SERVER_ENDPOINT}/api/carts/article/decrement`,
    { ...payload }
  );
}

// FIXME: Delete article should use DELETE verb.
async function deleteArticle(payload = {}) {
  return await axios.put(
    `${SERVER_ENDPOINT}/api/carts/article/delete`,
    { ...payload }
  );
}

async function validateCheckout(userId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/carts/cart/${userId}/validate`);
}
