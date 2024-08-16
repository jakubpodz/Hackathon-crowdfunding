const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log(`crowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//npx hardhat run scripts/deploy.js --network polygon_amoy
//npx hardhat run scripts/deploy.js --network localhost
