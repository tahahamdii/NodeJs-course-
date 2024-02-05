var express = require('express');
var productsRouter = express.Router();
const products = require('../public/data/products.json');

productsRouter.get('/', function(req, res, next) {
    res.json(products);
    }
    );

productsRouter.get('/:id', function(req, res, next) {
    res.json(products[req.params.id]);
    }
    );

    
module.exports = productsRouter;