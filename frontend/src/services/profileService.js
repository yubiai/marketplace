import axios from "axios";

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
    'http://localhost:4000/api/profiles/',
    {
      walletAddress
    }
  );
}

/**
 * Update provided profile
 * @param {str} userId
 * @param {Object} payload
 */
async function updateProfile(userId, payload = {}) {
  return await axios.put(
    `http://localhost:4000/api/profiles/${userId}`,
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
    `http://localhost:4000/api/profiles/${userId}`);
}

/**
 * Login
 * @param {str} walletAddress
 */
async function login(walletAddress) {
  return await axios.post(
    'http://localhost:4000/api/profiles/login',
    {
      walletAddress
    }
  );
}

/**
 * Get favorite articles from a profile
 * @param {str} userId
 */
async function getFavorites(userId) {
  return await axios.get(
    `http://localhost:4000/api/profiles/favorites/${userId}`);
}

/**
 * Update favorite articles from a profile
 * @param {str} userId
 * @param {Object} payload
 */
async function updateFavorites(userId, payload = {}) {
  return await axios.put(
    `http://localhost:4000/api/profiles/favorites/${userId}`,
    { ...payload }
  );
}

/**
 * Get latest purchases from a profile
 * @param {str} userId
 */
async function getMyPurchases(userId) {
  return await axios.get(
    `http://localhost:4000/api/profiles/my_purchases/${userId}`);
}

/**
 * Get latest sales from a profile
 * @param {str} userId
 */
async function getMySales(userId) {
  return await axios.get(
    `http://localhost:4000/api/profiles/my_sales/${userId}`);
}

