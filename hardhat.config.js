require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  paths: {
      artifacts: "./frontend/src/artifacts"
  },
  networks: {
    kovan: {
      url: 'https://kovan.infura.io/v3/3b497f5c8f834f52a12df8082eae8e2a',
      chainId: 42,
      accounts: ['0x4e087e7be18668b9a4508dd42a09de348fc261fa4d0f0e0d829d060b0888557b'],
    },
  },
};
