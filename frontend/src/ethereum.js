import { ethers, Contract } from 'ethers';
import PaymentProcessor from './contracts/PaymentProcessor.json';
import Ubi from './contracts/Ubi.json';

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAddress = await signer.getAddress();

        const paymentProcessor = new Contract(
          PaymentProcessor.networks[window.ethereum.networkVersion].address,
          PaymentProcessor.abi,
          signer
        );

        const ubi = new Contract(
          Ubi.networks[window.ethereum.networkVersion].address,
          Ubi.abi,
          signer
        );

        resolve({provider, paymentProcessor, ubi, signerAddress});
      }
      resolve({provider: undefined, paymentProcessor: undefined, ubi: undefined, signerAddress: undefined});
    });
  });

export default getBlockchain;


