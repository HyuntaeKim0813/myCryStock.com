class Stock {
    constructor(savedStockList = [], totalQuantity = 0, totalPrice = 0 ) {
        this.savedStockList = savedStockList; // Initialize an empty array to store saved stocks
        this.totalQuantity = totalQuantity;
        this.totalPrice = totalPrice;
    }

    addStock(symbol, stockName, price, industry) {
        const savedStock = {
            symbol: symbol,
            stockName: stockName,
            quantity: 1,
            price: price,
            industry: industry,
            totalPrice: price,
        };
    
        console.log(savedStock);
    
        for (let i = 0; i < this.savedStockList.length; i++) {
            const item = this.savedStockList[i];
            if (item.symbol === symbol) { // Compare with the symbol parameter
                savedStock.quantity = +item.quantity + 1;
                savedStock.totalPrice = item.totalPrice + price;

                this.savedStockList[i] = savedStock;

                this.totalQuantity++;
                this.totalPrice += item.price;
                return;
            }
        }
    
        this.savedStockList.push(savedStock); // Push the new stock object to the savedStock array
        this.totalQuantity++;
        this.totalPrice += price;

        console.log(this.savedStockList);

    }

    updateStock(symbol, newQuantity){
        for (let i = 0; i < this.savedStockList.length; i++) {
            const item = this.savedStockList[i];
            if (item.symbol === symbol && newQuantity >0) { // Compare with the symbol parameter
                const  stockItem = {...item};
                const quantityChange = newQuantity - item.quantity;
                stockItem.quantity = newQuantity;
                stockItem.totalPrice = newQuantity * item.price;
                this.savedStockList[i] = stockItem;

                this.totalQuantity = this.totalQuantity + quantityChange;
                this.totalPrice += quantityChange * item.price;
                return {updatedStockPrice: stockItem.totalPrice };

            } else if( item.symbol === symbol && newQuantity <= 0){
                console.log(item)
                this.savedStockList.splice(i, 1);
                this.totalQuantity = this.totalQuantity - item.quantity;
                this.totalPrice -= item.totalPrice;
                return {updatedStockPrice: 0 };
            }
        }

    }
}

module.exports = Stock;
