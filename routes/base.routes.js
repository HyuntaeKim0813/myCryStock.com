const express = require('express');

const router = express.Router();

router.get('/', function(req,res){
    res.render('customer/landing/landing')
} )

module.exports = router