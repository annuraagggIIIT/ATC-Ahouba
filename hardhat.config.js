require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    op: {
      url: "https://sepolia.optimism.io",
      accounts: {
        mnemonic: "chase hold tiger north mushroom post early fossil fold athlete seed bind"
      
      },
      chainId: 11155420
    }
  }
};