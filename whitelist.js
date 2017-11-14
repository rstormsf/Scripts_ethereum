require('dotenv').config();
var Tx = require('ethereumjs-tx');

let ARRAY_OF_ADDRESSES = require('./ARRAY_OF_ADDRESSES.json');
ARRAY_OF_ADDRESSES = Array.from(new Set(ARRAY_OF_ADDRESSES));
const RPC_PORT = process.env.RPC_PORT;
const PRESALE_ADDRESS = process.env.PRESALE_ADDRESS;
const UNLOCKED_ADDRESS = process.env.UNLOCKED_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY

const ICO_ABI = [{"constant":true,"inputs":[],"name":"weiPreCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_paused","type":"bool"}],"name":"pauseContribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_investors","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"devHolder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"canPurchase","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"finalizedBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchanger","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumPerTransaction","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"remainderHolder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collectorWeiCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"toFund","type":"uint256"}],"name":"tokensToGenerate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"thirtyPercentWithBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_investors","type":"address[]"}],"name":"blacklistAddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"communityHolder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiToCollect","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collectorWeiCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collector","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transferable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"investor","type":"address"}],"name":"whitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"notCollectedAmountAfter24Hours","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numWhitelistedInvestors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_transferable","type":"bool"}],"name":"allowTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initializedBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalWeiCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_apt","type":"address"},{"name":"_exchanger","type":"address"},{"name":"_contributionWallet","type":"address"},{"name":"_remainderHolder","type":"address"},{"name":"_devHolder","type":"address"},{"name":"_communityHolder","type":"address"},{"name":"_collector","type":"address"},{"name":"_collectorWeiCap","type":"uint256"},{"name":"_totalWeiCap","type":"uint256"},{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"twentyPercentWithBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"individualWeiCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"investor","type":"address"}],"name":"weiToCollectByInvestor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aix","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalWeiCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contributionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_th","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initializedTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"investor","type":"address"}],"name":"blacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"finalizedTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_aix","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_th","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_tokens","type":"uint256"}],"name":"NewSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_now","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_now","type":"uint256"}],"name":"Finalized","type":"event"}];

const Web3 = require('web3');
const MAINET_RPC_URL = 'https://mainnet.infura.io/metamask';
const KOVAN_RPC_URL = 'https://kovan.infura.io/metamask'
const provider = new Web3.providers.HttpProvider(MAINET_RPC_URL);
const privateKey = Buffer.from(PRIVATE_KEY, 'hex')
// const provider = new Web3.providers.HttpProvider(`http://localhost:${RPC_PORT}`);
const web3 = new Web3(provider);

const { filterAddresses, setup } = require('./filterAddresses');

setup({ web3Param: web3, contribAddress: PRESALE_ADDRESS});
const GAS_PRICE = web3.utils.toWei(process.env.GAS_PRICE, 'gwei');
const GAS_LIMIT = '6700000';
const myContract = new web3.eth.Contract(ICO_ABI, PRESALE_ADDRESS, {
    from: UNLOCKED_ADDRESS, // default from address
    gasPrice: GAS_PRICE,
    gas: GAS_LIMIT // default gas price in wei
});

filterAddresses(ARRAY_OF_ADDRESSES).then(async (toWhitelist) => {
    let currentInvestors = await myContract.methods.numWhitelistedInvestors().call();
    currentInvestors = Number(currentInvestors.toString(10));
    console.log('current whitelisted investors: ', currentInvestors);
    console.log('to whitelist', toWhitelist.length);
    console.log('Expected total whitelisted count after execution', toWhitelist.length + currentInvestors);
    const addPerTx = 140;
    const slices = Math.ceil(toWhitelist.length / addPerTx);
    console.log(`THIS SCRIPT WILL GENERATE ${slices} transactions`);
    var txcount = await web3.eth.getTransactionCount(UNLOCKED_ADDRESS);
    const nonce = web3.utils.toHex(txcount);
    console.log('STARTED', nonce);
    return sendTransactionToContribution({array: toWhitelist, slice: slices, addPerTx, nonce});
}).then(console.log).catch(console.error);

async function sendTransactionToContribution({array, slice, addPerTx, nonce}) {
    if(array.length === 0){
        console.log('array doesnot have not whitelisted addresses');
        process.exit();
    }
    const start = (slice - 1) * addPerTx;
    const end = slice * addPerTx;
    const arrayToProcess = array.slice(start, end);
    let encodedData = myContract.methods.whitelistAddresses(arrayToProcess).encodeABI();
    
    console.log('Processing array length', arrayToProcess.length, arrayToProcess[0], arrayToProcess[arrayToProcess.length - 1]);
    return new Promise((res) => {
        web3.eth.estimateGas({
            from: UNLOCKED_ADDRESS, to: PRESALE_ADDRESS, data: encodedData, gas: GAS_LIMIT, gasPrice: GAS_PRICE
        }).then((gasNeeded) => {
            console.log('gasNeeded', gasNeeded);
            var rawTx = {
                nonce: nonce,
                gasPrice:  web3.utils.toHex(GAS_PRICE),
                gasLimit:   web3.utils.toHex(gasNeeded),
                to: PRESALE_ADDRESS,
                data: encodedData
              }
              var tx = new Tx(rawTx);
              tx.sign(privateKey);
              var serializedTx = tx.serialize();
              web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', function(hash){console.log('hash', hash)});
            //   console.log(receipt);
            // web3.eth.sendTransaction({
            //     from: UNLOCKED_ADDRESS, to: PRESALE_ADDRESS, data: encodedData, gas: gasNeeded, gasPrice: GAS_PRICE, nonce
            // }).on('transactionHash', function(hash){console.log('hash', hash)});
            slice--;
            if (slice > 0) {
                nonce = parseInt(nonce, 16);
                nonce++;
                nonce = web3.utils.toHex(nonce);
                sendTransactionToContribution({array, slice, addPerTx, nonce});
            } else {
                res({ result: 'completed' });
                // process.exit();
            }

        });
    })
}