require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/4Y2N2hsAs6XYjlids0JFTXM8IIJq6aGX',
      accounts: ['cac52a65129ae3a22ea87f52d61b6fa5db3510a450d353266dee9022c55a7d6a'],
    },
  },

};

