# myCryStock.com

Website Purpose:
Allowing users to track all assets such as stock | realestate | ETF | Crypto.
Change the visualization to chart based. 

Target Audience: 
People who want to trace their assets.
Age: Every Age
Sex: ALL

Skills: 
- Combining different APIs to allow users to access stock data, crypto data, or other data.


Technology: NodeJS | JS | EJS | HTML | CSS | MongoDB

NPM(Node Project Manager):
1. Dotenv: env connection
2. Ejs: View Engine | run server side
3. Express: short cut for router get post setting.
4. Bcrptjs: Hash | Unhash Password 
5. Connect-mongodb-session: mongodb for session store
6. Express-session: Session store
7. Multer: multi/parcel - when we upload images
8. ChartJS: Visualizing data into chart
9. uuid: unique id generator

10. Csurf: Protect CSRF attacks

NPM API:
1. Finnhub: finance data api(1min 60 request limits | free version)
2. Strapi: Payment API (Possible use for subscription base)

DB(Database):
1. User(login, logout): Email, confirmedEmail, password, isAdmin - check total user data.

2. Stock: Name(Ticker), Bought Price, Latest Price

3. Crypto: Name(Ticker), Bought Price, Lastest Price

4. Total Asset

Function: 
Completed 
1. Landing Page 
    - navbar
    - landing images
2. Signup Page 
    - csrf depence
    - form: post
    - req.body store in mongodb
3. Login Page
    - session store
    - locals store to match login 
4. Logout function
5. MongoDB
    - mongodb-session

On going
1. Stock API
2. Crypto API
3. Total User Assets
4. Percentage Chart: Asset - money, Crypto, Stock

Possible functions: 
1. ETF API
2. Gold API
3. Housing Price API

- Full Asset Portfolio

