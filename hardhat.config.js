require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    agung: {
      url: "https://rpcpc1-qa.agung.peaq.network",
      accounts: {
        mnemonic: "chase hold tiger north mushroom post early fossil fold athlete seed bind"
      
      },
      chainId: 9990
    }
  }
};