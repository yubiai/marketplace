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
          
    
          const paymentProcessor = new Contract(
            PaymentProcessor.networks[window.ethereum.networkVersion].address,
            PaymentProcessor.abi,
            signer
          );

          const ubi = new Contract(
            Ubi.networks[window.ethereum.networkVersion].address, //for mainnet and public testnet replace by address of already deployed ubi token
            Ubi.abi,
            signer
          );

          resolve({provider, paymentProcessor, ubi});
        }
        resolve({provider: undefined, paymentProcessor: undefined, ubi: undefined});
    });
});

export default getBlockchain;
