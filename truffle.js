var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic =
  'tag typical aisle unknown island dinner street item awesome balcony rough evil';

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          'https://ropsten.infura.io/v3/2205b138e6b64559a48a32cd8639e757'
        ),
      network_id: '3'
    }
  }
};
