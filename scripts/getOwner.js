const hre = require("hardhat");

async function main() {

  const LOOTerra = await hre.ethers.getContractFactory("Looterra");
  const contract = LOOTerra.attach("0x015Cb940052E50cA320098a7EB627136Aebe5486");
  const owner = await contract.ownerOf(8003);

  console.log({owner});
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });