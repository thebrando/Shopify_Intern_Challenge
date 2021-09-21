# **Looterra**

Looterra is a blockchain based NFT game. Mint a graphically unique planet with random on-chain resource nodes. There is 10,000 planets to be minted.

- Each planet can have as many as ten nodes or as little as three.
- Every node has a quantity modifier including: Rich, Abundant, Scarce, Poor and Common.

  | Roll Chance |     |     |
  | ----------- | --- | --- |
  | Rich        | =   | 5%  |
  | Abundant    | =   | 10% |
  | Common      | =   | 40% |
  | Poor        | =   | 30% |
  | Scarce      | =   | 15% |

* Quantity modifier affects the speed of extraction

* Resources will be used to exchange for ERC-20 tokens that represent the resource. These tokens will be tradeable with other players or used to craft and upgrade

---

<p>&nbsp;</p>

## **How to mint**

### **Step 1.**

Go to the Looterra contract on etherscan:
[Looterra Contract](https://etherscan.io/address/0xd41a65b75ba49df1fc5c7c42dbd1cb2d43530368)

---

### **Step 2.**

Click the "Contract" tab and then the "Write Contract" sub-tab.

![Contract Tab](https://github.com/Looterra/Tutorials/blob/main/img/ContractTabandSubContract.PNG?raw=true)

---

### **Step 3.**

Click "Connect to Web3" and connect your metamask wallet.

![Connect Web3](https://github.com/Looterra/Tutorials/blob/main/img/connectMetamask.PNG?raw=true)

---

### **Step 4.**

There are two types of minting available. One for the public and one for Loot NFT holders (single/multi).

- Loot holder = You own a nft from this collection [Loot (for adventurers)](https://opensea.io/collection/lootproject)

<p>&nbsp;</p>

**Public mint:**

- Choose a tokenId between **8001-9900** Enter _.05 eth_. Fill out the fields and then press “Write”.

- **Warning:**
  If transaction fee is very high it means someone has already minted that token, try another tokenId. Also we've had a report that using a metamask account that is linked with a hardware wallet is causing issues. So we recommend using a normal metamask account.

![Public Mint](https://github.com/Looterra/Tutorials/blob/main/img/publicMint.PNG?raw=true)

---

<p>&nbsp;</p>

**Loot Holder Mint:**
Enter your tokenId and amount of _.025 eth_. Fill out the fields and then press “Write”.

## ![loot Owner Mint](https://github.com/Looterra/Tutorials/blob/main/img/lootOwnerMint.PNG?raw=true)

**Loot Holder Multi Mint:**
Enter your tokenId and _0.025/eth_ per Id.
Fill out the fields and then press “Write”.

![Multi Mint](https://github.com/Looterra/Tutorials/blob/main/img/lootOwnerMultiMint.PNG?raw=true)

---

# **View your planet on OpenSea**

To view your minted planet head over to the [Looterra](https://opensea.io/collection/looterra) OpenSea page.

- This may take up to 30mins.

---

<p>&nbsp;</p>

## **How to check resource nodes**

Go to the Looterra contract on etherscan:
[Looterra Contract](https://etherscan.io/address/0xd41a65b75ba49df1fc5c7c42dbd1cb2d43530368)

---

### **Step 1.**

Click the “Contract” tab followed by the “Read Contract” sub tab.

![Read Contract](https://github.com/Looterra/Tutorial/blob/main/img/readContract.PNG?raw=true)

## **Step 2.**

Click the “getAllResourceNodes” function, then type in the tokenId of your planet. Click "Query" and your nodes will be displayed.

![Read Contract](https://github.com/Looterra/Tutorial/blob/main/img/ViewNodes.PNG?raw=true)
