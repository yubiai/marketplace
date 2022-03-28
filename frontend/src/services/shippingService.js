import axios from 'axios';

const SERVER_ENDPOINT = (
  process.env.REACT_APP_API_URL || 'http://localhost:4000');

export const shippingService = {
  costShipping,
  newShipping,
  getLabel,
  cancelShipping,
  status,
  historyShipping
};

async function costShipping() {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/shipping/cost`,
  );
}

async function newShipping(payload = {}) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/shipping/newshipping`,
    {...payload}
  );
}

async function getLabel() {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/shipping/getlabel`,
  );
}

async function cancelShipping(payload = {}) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/shipping/cancel`,
    { ...payload }
  );
}

async function status(payload = {}) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/shipping/status`,
    { ...payload }
  );
}

async function historyShipping(payload = {}) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/shipping/historystatus`,
    { ...payload }
  );
}
