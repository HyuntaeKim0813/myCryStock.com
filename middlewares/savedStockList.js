const Stock = require('../models/save.model');

function initializSavedStock(req, res, next) {
    let stock;

    if (!req.session.stock) {
        stock = new Stock(); // Initialize a new instance of Save with default values
    } else {
        const sessionStock = req.session.stock;
        stock = new Stock(
            sessionStock.savedStockList,
            sessionStock.totalQuantity,
            sessionStock.totalPrice
        );
    }

    res.locals.stock = stock;

    next();
}

module.exports = initializSavedStock;
