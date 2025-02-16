require("@nomicfoundation/hardhat-toolbox"); // Ensure this is installed
require("dotenv").config();

const LOCAL_HOST = process.env.LOCAL_HOST;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    GoChainTestnet: {
      url: LOCAL_HOST,
      accounts: [PRIVATE_KEY], // Wrap PRIVATE_KEY in an array
    },
  },
};



// require("@nomicfoundation/hardhat-toolbox");

// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */

// const LOCAL_HOST = process.env.LOCAL_HOST;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// module.exports = {
//   solidity: "0.8.28",
//   networks: {
//     localhost: {
//       url:LOCAL_HOST,
//       accounts: PRIVATE_KEY,
//     },
//   },
// };



// 0x66536bAc1aA3437bD0A6305D9B37Bb18F211516A
// module.exports = {
//   defaultNetwork: "localhost",
//   networks: {
//     hardhat: {
//     },
//     localhost: {
//       url: "https://sepolia.infura.io/v3/<key>",
//       accounts: [privateKey1, privateKey2, ...]
//     }
//   },
//   solidity: {
//     version: "0.8.28",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts"
//   },
//   mocha: {
//     timeout: 40000
//   }
// }