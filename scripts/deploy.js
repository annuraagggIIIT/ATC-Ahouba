async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contract with the account:", deployer.address);
  
    const AirspaceNFT = await ethers.getContractFactory("AirspaceNFT");
    const airspaceNFT = await AirspaceNFT.deploy(); 
  
    console.log("Contract deployed to:", airspaceNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });