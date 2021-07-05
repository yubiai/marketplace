const Ubi = artifacts.require('Ubi.sol');
const PaymentProcessor = artifacts.require('PaymentProcessor.sol');

module.exports = async function (deployer, network, addresses) {
    const [admin, payer, _] = addresses;

    if(network == 'develop') {
        await deployer.deploy(Ubi);
        const ubi = await Ubi.deployed();
        await ubi.faucet(payer, web3.utils.toWei('10000'));
        
        await deployer.deploy(PaymentProcessor, admin, ubi.address);
    } else {
      const ADMIN_ADDRESS = '';
      const UBI_ADDRESS = '';
      await deployer.deploy(PaymentProcessor, ADMIN_ADDRESS, UBI_ADDRESS);
    }
    
  
};
