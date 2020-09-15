const router = require('express').Router();
const productController = require('../controllers/productController')

router.get('/findProducts', productController.findProducts);
router.get('/findProducts/:text', productController.findProducts);

module.exports = router;