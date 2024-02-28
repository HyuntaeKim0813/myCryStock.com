const path = require('path')

const express = require('express')
const csrf = require('csurf')
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handlre');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const savedStockMiddleware = require('./middlewares/savedStockList')

const baseRoutes = require('./routes/base.routes');
const authRoutes = require('./routes/auth.routes');
const stockRoutes = require('./routes/stock.routes');
const saveRoutes = require('./routes/save.routes');
const portfoliosRoutes = require('./routes/portfolios.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); //pass the object with configuration for form
app.use(express.json());

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(savedStockMiddleware);

app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRoutes);
app.use(stockRoutes);
app.use(saveRoutes);
app.use('/portfolios', portfoliosRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase().then(function(){
    app.listen(3000);    
}
).catch(function(error){
    console.log('failed to connect to the database!');
    console.log(error);
});




