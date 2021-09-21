const { expect } = require("chai");
const { ethers } = require("hardhat");
const BASE_URI = "ipfs://FAKE_IPFS_CID/";
const TEST_WALLET = "0x243dc2F47EC5A0693C5c7bD39b31561cCd4B0e97";
const lootOwnerPrice = 15000000000000000; //0.015 ETH
const publicPrice = 30000000000000000; //0.03 ETH

describe("Looterra", function () {
  it("Should mint a new token", async function () {
    const Looterra = await ethers.getContractFactory("Looterra");
    const looterra = await Looterra.deploy(BASE_URI);
    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    await looterra.lootOwnerMint(7769,{value:15000000000000000, from:TEST_WALLET});
    expect(await lootOwnerPrice.ownerOf(7769)).to.equal(TEST_WALLET);
  });
});