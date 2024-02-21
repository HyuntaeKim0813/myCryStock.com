require('dotenv').config();
const finnhub = require('finnhub');

class Stock{
    constructor(stockName) {
        this.stockName = stockName
    }

    static async ticker() {
        try {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = process.env.API_KEY;
            const finnhubClient = new finnhub.DefaultApi();

            const data = await new Promise((resolve, reject) => {
                finnhubClient.symbolSearch('AAPL', (error, data, response) => {
                    if (error) {
                        console.error("Error calling Finnhub API:", error);
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

module.exports = Stock;