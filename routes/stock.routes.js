const express = require('express');

const stockController = require('../controllers/stock.controller')

const router = express.Router();

router.post('/stock', stockController.postSymbolList);
router.get('/stock/:id', stockController.getSymbolList);

router.post('/stock-info', stockController.postSymbolInfo); // Corrected route handler name
router.get('/stock-info/:symbol', stockController.getSymbolInfo);

module.exports = router