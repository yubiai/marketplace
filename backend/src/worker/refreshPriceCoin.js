const axios = require('axios');
const cron = require('node-cron');

const { PriceCoin } = require('../models/Pricecoin');

const priceRefreshUbi = () => {

    return new Promise(async (resolve, reject) => {

        await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=universal-basic-income&vs_currencies=usd&include_last_updated_at=true")
            .then(async (res) => {

                let token = await PriceCoin.findOne({
                    symbol: 'ubi'
                });

                if (!token) {
                    let newToken = {
                        symbol: 'ubi',
                        name: 'universal-basic-income',
                        price: res.data['universal-basic-income'].usd,
                        last_updated_at: res.data['universal-basic-income'].last_updated_at
                    }
                    const newData = new PriceCoin(newToken);
                    await newData.save();
                    return resolve(true);
                }

                if (token) {
                    await PriceCoin.findByIdAndUpdate(token._id, {
                        price: res.data['universal-basic-income'].usd,
                        last_updated_at: res.data['universal-basic-income'].last_updated_at
                    }
                    );
                    return resolve(true);
                }
            })
            .catch((err) => {
                console.log(err)
                reject(err);
            })
    })
}

const priceRefreshARG = () => {

    return new Promise(async (resolve, reject) => {

        await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            .then(async (res) => {
                const dataDolar = res.data;

                const token = await PriceCoin.findOne({
                    symbol: 'arg'
                });

                if (!token) {
                    let newToken = {
                        symbol: 'arg',
                        name: 'Peso Argentino',
                        price: 0,
                        last_updated_at: 0
                    }
                    const newData = new PriceCoin(newToken);
                    await newData.save();
                }

                for (let i = 0; i < dataDolar.length; i++) {
                    if (dataDolar[i].casa.nombre == "Dolar Blue") {
                        if (token) {
                            await PriceCoin.findByIdAndUpdate(token._id, {
                                price: parseFloat(dataDolar[i].casa.venta)
                            }
                            );
                            return resolve(true);
                        }
                        break;
                    }
                }
            })
            .catch((err) => {
                console.log(err)
                reject(err);
            })
    })
}

const refreshPriceCoin = async () => {

    cron.schedule(`*/1 * * * *`, async () => {
        console.log("Arranco cron Prices")
        await priceRefreshUbi();
        await priceRefreshARG();
    })

}

module.exports = {
    refreshPriceCoin
};
