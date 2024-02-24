require('dotenv').config();
const finnhub = require('finnhub');

class Stock{
    constructor(stockName) {
        this.stockName = stockName
    }

    static async ticker(stockSymbol) {
        try {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = process.env.API_KEY;
            const finnhubClient = new finnhub.DefaultApi();

            const data = await new Promise((resolve, reject) => {
                finnhubClient.symbolSearch(stockSymbol, (error, data, response) => {
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

    static async tickerInfo(symbol){
        try {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = process.env.API_KEY;
            const finnhubClient = new finnhub.DefaultApi();

            const data = await new Promise((resolve, reject) => {
                finnhubClient.companyProfile2({'symbol': symbol}, (error, data, response) => {
                    if (error) {
                        console.error("Error calling Finnhub API:", error);
                        reject(error);
                    } else {
                        resolve(data);
                    }
                  });
            });
            return data;
        }catch (error) {
        console.error('Error:', error);
        throw error;
        }
    }

    static async currentPrice(symbol){
        try {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = process.env.API_KEY;
            const finnhubClient = new finnhub.DefaultApi();
            
            const data = await new Promise((resolve, reject) => {
                finnhubClient.quote(symbol, (error, data, response) => {
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

    static async relatedNews(symbol){
        try {
            const api_key = finnhub.ApiClient.instance.authentications['api_key'];
            api_key.apiKey = process.env.API_KEY;
            const finnhubClient = new finnhub.DefaultApi();
            
            const data = await new Promise((resolve, reject) => {
                finnhubClient.companyNews(symbol, "2023-02-23", "2024-02-23", (error, data, response) => {
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