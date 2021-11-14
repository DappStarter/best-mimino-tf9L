require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food story repeat pizza social coral light army gate'; 
let testAccounts = [
"0x81e8caf5fd7c04e4fd8161af1665983fd9e8330a8f9a422aeca284d7922ee293",
"0x617d997c249d2bbfc4676380159f737b96e98f32721be35921bc6f2734595169",
"0x8b911fbb6128bde0cc729da17521122857356dd2f08a762276877fa9d16262c2",
"0xf59003e11fc3f2bd0788ee3821ba8e6fdd8fc1a2b257dfd7b2c24fbd3535968b",
"0x8b407455b81f6ee137062316a850074b0a4c9ff56ef8569b6b59778d9a76a84d",
"0x4c30fb762b7c88c60c48749c74194fa8cc527448878b1ca327bf203a16e51920",
"0x3b75d88beddf7b77f3fb0c50e6681897dc4832c2c77c0885329a412fd81c4719",
"0xaba286bd49fcf5400b31b9570bbb450d4174a60ac9109a5174f695232c5e308a",
"0x0ed60acae92ceb426123ea268a16e1d4cf17f35778e7ec8b25d94009ef382b4f",
"0xd12cca7bff9f706e3c1c81382d72f3a54147d8bb0d119f30825f73c7a68f43a3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

