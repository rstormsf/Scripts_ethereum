require('dotenv').config();
const ContributionABI = [{"constant":true,"inputs":[],"name":"weiPreCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_paused","type":"bool"}],"name":"pauseContribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_investors","type":"address[]"}],"name":"whitelistAddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"devHolder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newController","type":"address"}],"name":"changeController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"canPurchase","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"finalizedBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"exchanger","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minimumPerTransaction","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"remainderHolder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collectorWeiCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"toFund","type":"uint256"}],"name":"tokensToGenerate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"thirtyPercentWithBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_investors","type":"address[]"}],"name":"blacklistAddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"communityHolder","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiToCollect","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collectorWeiCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"collector","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transferable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"investor","type":"address"}],"name":"whitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"notCollectedAmountAfter24Hours","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numWhitelistedInvestors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_transferable","type":"bool"}],"name":"allowTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"initializedBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalWeiCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_apt","type":"address"},{"name":"_exchanger","type":"address"},{"name":"_contributionWallet","type":"address"},{"name":"_remainderHolder","type":"address"},{"name":"_devHolder","type":"address"},{"name":"_communityHolder","type":"address"},{"name":"_collector","type":"address"},{"name":"_collectorWeiCap","type":"uint256"},{"name":"_totalWeiCap","type":"uint256"},{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"twentyPercentWithBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"individualWeiCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"investor","type":"address"}],"name":"weiToCollectByInvestor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"aix","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalWeiCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contributionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_th","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initializedTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"investor","type":"address"}],"name":"blacklist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"finalizedTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_aix","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_token","type":"address"},{"indexed":true,"name":"_controller","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"ClaimedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_th","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_tokens","type":"uint256"}],"name":"NewSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_now","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_now","type":"uint256"}],"name":"Finalized","type":"event"}];

// const Web3 = require('web3');
// const MAINET_RPC_URL = 'https://mainnet.infura.io/metamask'
// const KOVAN_RPC_URL = 'https://kovan.infura.io/metamask'
// const local = `http://localhost:${process.env.RPC_PORT}`;
// const provider = new Web3.providers.HttpProvider(local);
// const web3 = new Web3(provider);
// var myContract = new web3.eth.Contract(ContributionABI, process.env.PRESALE_ADDRESS);
// const ARRAY_OF_ADDRESSES = require('./ARRAY_OF_ADDRESSES.json');
// filterAddresses(ARRAY_OF_ADDRESSES).then(console.log)
// readCap();
function setup({web3Param, contribAddress}){
    web3 = web3Param;
    CONTRIBUTION_ADDRESS = contribAddress
    myContract = new web3.eth.Contract(ContributionABI, CONTRIBUTION_ADDRESS);
}

// function readCap() {
//     myContract.methods.investorsLength().call().then((cap) => {
//         console.log('cap', cap);
//     })
// }
function isWhitelisted(toCheckAddress) {
    var count = 0;
    var leftRun = toCheckAddress.length;
    let notWhitelisted = [];
    let promise = new Promise((res) => {
        if(toCheckAddress.length === 0 || !toCheckAddress) {
            rej('array is empty');
        }
        toCheckAddress.forEach((address, index) => {
            myContract.methods.canPurchase(address).call().then((isWhitelisted) => {
                leftRun--;
                if (!isWhitelisted) {
                    count++;
                    notWhitelisted.push(address);
                }
                if (leftRun === 0) {
                    console.log('FINISHED filtering array! notWhitelisted: ', notWhitelisted.length);
                    res(notWhitelisted);
                }
            });
        })
    })
    return promise;
}

function filterAddresses(arrayOfAddresses) {
    const date = Date.now();
    console.log(date, 'DATE NOW, to process array length', arrayOfAddresses.length);
    return new Promise((res, rej) => {
       return isWhitelisted(arrayOfAddresses).then((whitelistedAddress) => {
            res(whitelistedAddress);
        }).catch(console.error);
    })
}
exports.filterAddresses = filterAddresses;
exports.isWhitelisted = isWhitelisted;
exports.setup = setup;