// routes/products.js
const express = require('express');
const router = express.Router();
const productsData = require('../public/data/products.json');

router.get('/', (req, res) => {
  res.json({
    products: productsData,
  });
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  const product = productsData[productId];

  if (product) {
    res.json({
      product,
    });
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

router.get('/:id/:qt', (req, res) => {
  const productId = req.params.id;
  const quantity = parseInt(req.params.qt, 10);
  const product = productsData[productId];

  if (product) {
    const totalPrice = quantity * product.price;
    res.json({
      totalPrice,
    });
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});



module.exports = router;
