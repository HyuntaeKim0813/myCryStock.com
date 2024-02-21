require('dotenv').config();
const finnhub = require('finnhub');

const Stock = require('../models/stocklist.model')

async function getSymbolPrice(req, res) {
    try {
      
        const data = await Stock.ticker()
        res.render('customer/stock/stocklist', {data: data});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error);
    }
}

module.exports = {
    getSymbolPrice: getSymbolPrice,
};