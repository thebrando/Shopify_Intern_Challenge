const hre = require("hardhat");
const lootOwnerPrice = 15000000000000000; //0.015 ETH
const publicPrice = 30000000000000000; //0.03 ETH

async function main() {

  const LOOTerra = await hre.ethers.getContractFactory("Looterra");
  // const contract = LOOTerra.attach("0x6478AE8a197f7c6199Ba3c725bbb96EEAb1Fc73B");
  const withdraw = await contract.withdraw();

  console.log("withdraw success", withdraw);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });