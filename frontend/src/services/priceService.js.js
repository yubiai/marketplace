import axios from "axios";

export const priceService = {
    getPrices
}

async function getPrices() {
    return await axios.get(`/prices/`);
}

