import axios from "axios";

let contractUbi = '0xdd1ad9a21ce722c151a836373babe42c868ce9a4'
let apikey = 'B1CXFM2QFVXPN7YE2RC9TV355F4YZ1M9T9'

export const etherscanService = {
    getBalanceUbi
}

async function getBalanceUbi(address) {
    return await axios.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contractUbi}&address=${address}&tag=latest&apikey=${apikey}`);
}

