require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index raise rural uncover idea praise army general'; 
let testAccounts = [
"0x9cba704f75d7f1185d0a59e5eaf133560e088453b9480c7c994a45412cad27f3",
"0x64581098f6263e4bd6e62c66d47f08944344cdf8d289a5bebcb75a9ebe3db0fe",
"0x13d2f193e55d8c841eabefb8dce5c8bc82a9e3c0fe08da4fd44e3735e259a617",
"0x251ca29829cdb89deaa5564f34be30ad1473745d833b6fec0d966f3a740c23e4",
"0xf169512ad89ce961da9a9bb8e31a85dc3e25ffb35de47464092c5dafe294e6e6",
"0x123b82435da844b2af6189add92798326db6623611e50781b08c43ed5e8b2257",
"0x99516c70e870fe730f75122b48e77c9fd5e07a19ff471d978584a3a6aa105c72",
"0x6c967050402c2acb60e2a3e251aa48850e7a48865c37b913cb3cec128c460d24",
"0xbb6e08671079ada65a4ee53df9cd632efb0f0f8acb3c0d75b4209fdf74eb3bd3",
"0x257d24825b73af04acb3ae1518a525a0d8c08404b6455db2af8fc775960892b1"
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

