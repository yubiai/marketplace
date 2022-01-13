import axios from "axios";
import { ethers } from "ethers";

const UBI_CONTRACT_ADDRESS = "0xdd1ad9a21ce722c151a836373babe42c868ce9a4";
const ETHERSCAN_API_KEY = "B1CXFM2QFVXPN7YE2RC9TV355F4YZ1M9T9";

type GetBalanceUBIResponse = {
  status: string;
  message: string;
  result: string;
};

export const getBalanceUbi = async (
  address: string
): Promise<ethers.BigNumber | undefined> => {
  const response = await axios.get<GetBalanceUBIResponse>(
    `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${UBI_CONTRACT_ADDRESS}&address=${address}&tag=latest&apikey=${ETHERSCAN_API_KEY}`
  );

  return response.data.status === "1"
    ? ethers.BigNumber.from(response.data.result)
    : undefined;
};
