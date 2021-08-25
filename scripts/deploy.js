const { ethers } = require("hardhat");

async function main() {
  const [admin, payer] = await ethers.getSigners();
  console.log("Deployando contratos con la cuenta: ", admin.address);

  console.log("Balance cuenta: ", (await admin.getBalance()).toString());

  const ubiFactory = await ethers.getContractFactory("Ubi");
  const ubiContract = await ubiFactory.deploy();
  console.log("Ubi contract address: ", ubiContract.address);

  await ubiContract.faucet(payer.address, ethers.utils.parseEther("5000"));

  const balance = await ubiContract.balanceOf(payer.address);
  console.log("Buyer UBI balance: ", ethers.utils.formatEther(balance));

  const ppFactory = await ethers.getContractFactory("PaymentProcessor");
  const paymentProcessor = await ppFactory.deploy(
    admin.address,
    ubiContract.address
  );
  console.log("PaymentProcessor Address: ", paymentProcessor.address);

  console.log("Shop Owner Address: ", admin.address);
  console.log("Buyer Address: ", payer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
