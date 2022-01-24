import axios from "axios";

export const categoryService = {
    getCategories
}

/// en vez de sacar las categorias de la api de meli, sacarlos del story book de yubiai
async function getCategories() {
    return await axios.get(`http://localhost:4000/api/categories/`, {
        categories
      });
}