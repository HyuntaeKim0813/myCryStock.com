const express = require('express');

const portfoliosController = require('../controllers/portfolios.controller')

const router = express.Router();

router.get('/', portfoliosController.addPortfolios);

// router.post('/', portfoliosController.addPortfolios);

module.exports = router