import { ethers, Contract } from "ethers";
//import PaymentProcessor from "./artifacts/contracts/PaymentProcessor.sol/PaymentProcessor.json";
//import Ubi from "./artifacts/contracts/Ubi.sol/Ubi.json";

async function setupEthState() {
  await window.ethereum.enable();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();

  const ppAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const ubiAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const paymentProcessor = new Contract(
    ppAddress,
    //PaymentProcessor.abi,
    signer
  );

  const ubi = new Contract(ubiAddress, signer);
  return { provider, signerAddress, paymentProcessor, ubi };
}

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        resolve({ ...(await setupEthState()) });
      }
      resolve({
        provider: undefined,
        paymentProcessor: undefined,
        ubi: undefined,
        signerAddress: undefined,
      });
    });
  });

export { getBlockchain, setupEthState };
