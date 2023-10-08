const express = require('express');
const router = express.Router();
const {getAllProducts, getAllProductsStatic} = require('../controllers/products');
router.get('/products', getAllProducts);
router.get('/dashboard', getAllProductsStatic);

module.exports = router;

