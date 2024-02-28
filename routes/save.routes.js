const express = require('express');

const saveController = require('../controllers/savedStock.controller')

const router = express.Router();

router.get('/save', saveController.getStock)

router.post('/save/stocks', saveController.addStock)

//when we update data use put or patch
router.patch('/save/stocks', saveController.updateStockItem)

module.exports = router