var express = require('express');
var productsRouter = express.Router();
const productsData = require('../public/data/products.json');

productsRouter.get('/', function(req, res, next) {
    res.json(productsData);
    }
    );

    router.get('/:id', (req, res) => {
        const productId = req.params.id;
        const product = productsData.find((p) => p.id === productId);
      
        if (product) {
          res.json({
            product,
          });
        } else {
          res.status(404).json({
            message: 'Produit non trouvé',
          });
        }
      });

router.get('/:id/:qt', (req, res) => {
  const productId = req.params.id;
  const quantity = parseInt(req.params.qt, 10);
  const product = productsData.find((p) => p.id === productId);

  if (product) {
    const totalPrice = quantity * product.price;
    res.json({
      totalPrice,
    });
  } else {
    res.status(404).json({
      message: 'Produit non trouvé',
    });
  }
});
    
module.exports = productsRouter;