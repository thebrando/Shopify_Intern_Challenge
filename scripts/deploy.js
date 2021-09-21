const { ethers } = require("ethers");
const hre = require("hardhat");
const BASE_URI =
  "https://looterra.mypinata.cloud/ipfs/QmNroyhiWD3JF9MVpmcPHsRySrmhU4uEK7qKFXLupCRxNF/";

async function main() {
  const LOOTerra = await hre.ethers.getContractFactory("Looterra");
  const looTerra = await LOOTerra.deploy(BASE_URI);

  await looTerra.deployed();

  console.log("Looterra deployed to:", looTerra.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
