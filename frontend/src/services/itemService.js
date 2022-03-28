import axios from 'axios';
import { getToken } from './utils';

const SERVER_ENDPOINT = (
  process.env.REACT_APP_API_URL || 'http://localhost:4000');

export const itemService = {
  getItem,
  newItem,
  getItemBySlug,
  getItemPayment,
  getItemUrl
};

async function getItem(itemId = '', query='') {
  return await axios.get(
    `${SERVER_ENDPOINT}/items/item${query}`,
    {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    }
  );
}

async function newItem(payload, categoryId) {
  return new Promise(async(resolve, reject) => {
    try {
      let result = await axios.post(
        `${SERVER_ENDPOINT}/items/item?categoryId=${categoryId}`,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${getToken()}`
          }
        }
      );
      if (result){
        console.log(result, "result");
        resolve(true)
      }
    } catch (err) {
      console.log(err)
      reject(err);
    }
  })
}

async function getItemBySlug(slugId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/items/item/${slugId}`,
  );
}

async function getItemPayment(itemId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/items/getPaymentId/${itemId}`,
  );
}

async function getItemUrl(paymentId = '') {
  return await axios.get(
    `${SERVER_ENDPOINT}/items/getItemUrl/${paymentId}`,
  );
}
