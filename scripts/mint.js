const hre = require("hardhat");
const { ethers } = require("ethers");
const lootOwnerPrice = 15000000000000000; //0.015 ET
const publicPrice = '100000000000000000'; //0.1 ETH

async function main() {

  const LOOTerra = await hre.ethers.getContractFactory("Looterra");
  const contract = LOOTerra.attach("0xd3f38a664FA9dA64d5f94b5302B8FFd1b76121Ca");
  const mintedNft = await contract.publicMint(8004,{value:publicPrice});

  console.log("token minted", mintedNft);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });