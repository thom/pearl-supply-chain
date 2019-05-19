const fs = require('fs');

const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = fs.readFileSync(".infura-key").toString().trim();
const mnemonic = fs.readFileSync(".mnemonic").toString().trim();

module.exports = {
  compilers: {
    solc: {
      version: "^0.4.24", // A version or constraint - Ex. "^0.5.0"
                          // Can also be set to "native" to use a native solc
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  }
};
