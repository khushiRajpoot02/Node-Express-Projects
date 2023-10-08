const {productSchema} = require('../models/products')
const getAllProducts = async (req, res)=>{
    res.status(200).json('sending all the products');
  }
  const getAllProductsStatic = (req, res)=>{
      res.status(200).json('sending all the static products');
  }
  module.exports = {getAllProducts, getAllProductsStatic};