import axios from 'axios';
import { getToken } from './utils';

const SERVER_ENDPOINT = (
  process.env.REACT_APP_BE_SERVER || 'http://localhost:4000');

export const itemService = {
  getItem,
  newItem,
  getItemBySlug,
  getItemPayment,
  getItemUrl
};

async function getItem(itemId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/items/item`,
  );
}

async function newItem(payload, categoryId) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/items/item?categoryId=${categoryId}`,
    payload,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${getToken()}`
      }
    }
  );
}

async function getItemBySlug(slugId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/items/item/${slugId}`,
  );
}

async function getItemPayment(itemId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/items/getPaymentId/${itemId}`,
  );
}

async function getItemUrl(paymentId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/items/getItemUrl/${paymentId}`,
  );
}
