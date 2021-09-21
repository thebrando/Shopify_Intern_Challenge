const { expect } = require("chai");
const { ethers } = require("hardhat");
const Web3 = require("web3")
const BASE_URI = "ipfs://FAKE_IPFS_CID/";
const TEST_WALLET = "0x243dc2F47EC5A0693C5c7bD39b31561cCd4B0e97";
const lootOwnerPrice = '15000000000000000'; //0.015 ETH
const publicPrice = 30000000000000000; //0.03 ETH

describe("Looterra", function () {
  it("Should mint a new token", async function () {
    const Looterra = await ethers.getContractFactory("Looterra");
    const looterra = await Looterra.deploy(BASE_URI);
    await looterra.deployed();
    await looterra.publicMint(8001,{value:Web3.utils.toWei("3", 'ether')});
    await looterra.publicMint();
    expect(await looterra.ownerOf(8001)).to.equal();
  });
});