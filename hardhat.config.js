require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-amoy.polygon.technology/";
const NEXT_PUBLIC_PRIVATE_KEY =
  "353ee9aae23c1aa05a160ff5932029e4f5c03ef5cba681b705d885c5030f8d8b";
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
