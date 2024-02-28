const Chart = require('chart.js/auto');

class Portfolio{
    constructor(stock, date){
        this.portfolioData = stock;
        this.date = new Date(date);
        if(this.date){
            this.formatedDate = this.date.toLocaleDateString('en-US',{
                weekday: 'short',
                day: 'numeric',
                month:'long',
                year: 'numeric',
            });
        }
    }

     // Method to generate chart
     

}

module.exports = Portfolio;