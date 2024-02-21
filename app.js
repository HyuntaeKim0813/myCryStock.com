const path = require('path')

const express = require('express')

const stockRoutes = require('./routes/stock.routes')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(stockRoutes);

app.listen(3000);




