const Stock = require('../models/stocklist.model');

async function getStock(req,res){
    res.render('customer/saved/stocks');
}

async function addStock(req,res,next){
    let stockInfo;
    let currentPrice;

    try {
        const symbol = req.body.stockid;
        console.log(symbol);

        // Fetch stock info and current price asynchronously
        [stockInfo, currentPrice] = await Promise.all([
            Stock.tickerInfo(symbol),
            Stock.currentPrice(symbol)
        ]);


    } catch (error) {
        next(error);
        return;
    }

    const stock = res.locals.stock;
    console.log(stockInfo.finnhubIndustry)
    stock.addStock(stockInfo.ticker, stockInfo.name, currentPrice.c, stockInfo.finnhubIndustry);
    console.log(stockInfo.ticker, stockInfo.name, currentPrice.c);
    req.session.stock = stock;

    res.status(201).json({
        message:"Stock Saved",
        newSavedStocks: stock.totalQuantity
    });
}

function updateStockItem(req,res){
    const stock = res.locals.stock;

    const updateStockData = stock.updateStock(
        req.body.symbol, 
        +req.body.quantity
    );

    req.session.stock = stock;

    res.json({
        message: 'Stock Updated!',
        updateStockData:{
          newTotalQuantity: stock.totalQuantity,
          newTotalPrice: stock.totalPrice,
          updatedStockPrice: updateStockData.updatedStockPrice  
        },
        
    });
}

module.exports = {
    addStock: addStock,
    getStock: getStock,
    updateStockItem:updateStockItem
}