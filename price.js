// api/price.js
const Web3 = require('web3');

module.exports = async (req, res) => {
  const web3 = new Web3('https://rpc.defi-verse.org/');
  const contract = new web3.eth.Contract(/* ABIをここに挿入 */, '<DEXのコントラクトアドレス>');
  
  try {
    const reserves = await contract.methods.getReserves().call();
    const price = reserves._reserve1 / reserves._reserve0;
    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching price' });
  }
};
