var Tx = require('ethereumjs-tx');
const Web3 = require('web3');
// const MAINET_RPC_URL = 'https://mainnet.infura.io/metamask'
const KOVAN_RPC_URL = 'https://kovan.infura.io/metamask'
// const local = `http://localhost:${process.env.RPC_PORT}`;
const provider = new Web3.providers.HttpProvider(KOVAN_RPC_URL);
const web3 = new Web3(provider);
// var myContract = new web3.eth.Contract(ContributionABI, process.env.PRESALE_ADDRESS);
// const ARRAY_OF_ADDRESSES = require('./ARRAY_OF_ADDRESSES.json');
// filterAddresses(ARRAY_OF_ADDRESSES).then(console.log)
// readCap();
const privateKey = Buffer.from(process.env.PRIVATE_KEY, 'hex')

var txcount = web3.eth.getTransactionCount('0x0039f22efb07a647557c7c5d17854cfd6d489ef3').then(async (txcount)=>{
    console.log(txcount);
    var rawTx = {
        nonce: web3.utils.toHex(1427),
        gasPrice: web3.utils.toHex(3000000000),
        gasLimit:  web3.utils.toHex(2704588),
        // gas: '21000',
        to: '0x0039F22efB07A647557C7C5d17854CFD6D489eF3',
        value: '1',
        data: '0x123'
      }
        var tx = new Tx(rawTx);
        tx.sign(privateKey);
        var serializedTx = tx.serialize();
        var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
        console.log(receipt);
});
  
  