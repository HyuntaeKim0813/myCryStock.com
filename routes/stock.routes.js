const express = require('express');

const stockController = require('../controllers/stock.controller')

const router = express.Router();

router.get('/stock', stockController.getSymbolPrice )

module.exports = router