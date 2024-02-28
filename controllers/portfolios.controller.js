const Portfolio = require('../models/portfolio.model'); // Import the Portfolio model

function addPortfolios(req, res) {
    const stock = res.locals.stock;

    // Create a new Portfolio instance with the stock data and today's date
    const portfolio = new Portfolio(stock, new Date());

    // Generate and display the chart

    // You might want to send a response indicating that the chart has been generated
    res.render('customer/portfolio/portfolio-page', { stock: stock});
}

module.exports = {
    addPortfolios:addPortfolios
}