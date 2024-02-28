const Stock = require('../models/stocklist.model');

// Function to create a new stock symbol list
async function postSymbolList(req, res) {
    try {
        // Assuming you want to create a new stock symbol list here
        // You can access the submitted data from req.body
        // Process the data and save it to the database, if needed

        // Redirect the user to the route where the newly created list is displayed
        res.redirect(`/stock/${req.body.stock}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Function to retrieve and display a stock symbol list for a specific ID
async function getSymbolList(req, res) {
    let id = req.params.id; // Get the ID from the URL
    try {
        // Fetch the stock symbol list for the specified ID
        const stockList = await Stock.ticker(id);
        // Render the view with the retrieved data
        res.render('customer/stock/stocklist', { stockList: stockList, id:id });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function postSymbolInfo(req, res) {
    try {
        const symbol = req.body.symbol; // Assuming symbol is submitted via POST request

          // Fetch stock information
       
        // Assuming you want to create a new stock symbol list here
        // You can access the submitted data from req.body
        // Process the data and save it to the database, if needed

        // Redirect the user to the route where the newly created list is displayed
        res.redirect(`/stock-info/${req.body.symbol}`);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}


async function getSymbolInfo(req,res){
    const symbol = req.params.symbol; // Accessing the symbol parameter from the route
    try {
        // Perform operations with the symbol data as needed
        // For example, fetch more information about the symbol from your database or an external API
        //get info
        const stockInfo = await Stock.tickerInfo(symbol);
        console.log(stockInfo.name + stockInfo.ticker)
        //get current data
        const currentPrice = await Stock.currentPrice(symbol);
        console.log(currentPrice.c)
        const relatedNews = await Stock.relatedNews(symbol);
        // Respond with the symbol data or any other relevant information
        res.render('customer/stock/stock-info',{symbol:symbol, stockInfo:stockInfo,currentPrice:currentPrice, relatedNews:relatedNews});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = {
    postSymbolList: postSymbolList,
    getSymbolList: getSymbolList,
    postSymbolInfo:postSymbolInfo,
    getSymbolInfo: getSymbolInfo

};
