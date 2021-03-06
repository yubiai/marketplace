import axios from 'axios';

const SERVER_ENDPOINT = (
  process.env.REACT_APP_BE_SERVER || 'http://localhost:4000');

export const categoryService = {
  getCategories,
  createCategory,
  getCategory
}

// TODO: en vez de sacar las categorias de la api de meli,
// sacarlos del story book de yubiai
async function getCategories() {
  return await axios.get(`${SERVER_ENDPOINT}/api/categories/`);
}

async function createCategory(payload = {
  categoryId: -1,
  title: '',
  description: '',
  permalink: '',
}) {
  return await axios.post(
    `${SERVER_ENDPOINT}/api/categories`,
    {...payload}
  );
}

async function getCategory(categoryId) {
  return await axios.get(
    `${SERVER_ENDPOINT}/api/categories/${categoryId}`);
}
