import axios from 'axios';

const SERVER_ENDPOINT = (
  process.env.REACT_APP_BE_SERVER || 'http://localhost:4000');

export const profileService = {
  getProfile,
  login,
  updateProfile,
  deleteProfile,
  getFavorites,
  updateFavorites,
  getMyPurchases,
  getMySales
}

/**
 * Check wallet addres on PoH
 * @param {str} walletAddress
 */
async function getProfile(walletAddress) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/profiles/`,
    { walletAddress }
  );
}

/**
 * Update provided profile
 * @param {str} userId
 * @param {Object} payload
 */
async function updateProfile(userId, payload = {}) {
  return await axios.put(
    `${SERVER_ENDPOINT}/api/profiles/${userId}`,
    { ...payload }
  );
}

/**
 * Remove provided profile
 * @param {str} userId
 * @param {Object} payload
 */
async function deleteProfile(userId) {
  return await axios.delete(
    `${SERVER_ENDPOINT}/api/profiles/${userId}`);
}

/**
 * Login
 * @param {str} walletAddress
 */
async function login(walletAddress) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/profiles/login`,
    { walletAddress }
  );
}

/**
 * Get favorite articles from a profile
 * @param {str} userId
 */
async function getFavorites(userId) {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/profiles/favorites/${userId}`);
}

/**
 * Update favorite articles from a profile
 * @param {str} userId
 * @param {Object} payload
 */
async function updateFavorites(userId, payload = {}) {
  return await axios.put(
    `${SERVER_ENDPOINT}/api/profiles/favorites/${userId}`,
    { ...payload }
  );
}

/**
 * Get latest purchases from a profile
 * @param {str} userId
 */
async function getMyPurchases(userId) {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/profiles/my_purchases/${userId}`);
}

/**
 * Get latest sales from a profile
 * @param {str} userId
 */
async function getMySales(userId) {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/profiles/my_sales/${userId}`);
}
