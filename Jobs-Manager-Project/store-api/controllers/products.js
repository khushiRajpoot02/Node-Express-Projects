const productModel = require('../models/products')
const getAllProductsStatic = async (req, res)=>{
    res.status(200).json('sending all the products');
  }
  const getAllProducts = async (req, res)=>{
    const {featured, company, name, sort,createdAt, fields} = req.query;// featured
    const queryObj = {};
    if(featured){
        queryObj.featured = featured == 'true' ? true : false
    }
    if(company){
        queryObj.company = company
    }
    if(name){
      queryObj.name = {$regex : name, $options: 'i'};
    }
// sorting so let's take look in sorting and numeric filtering 
let result =  productModel.find(queryObj)
console.log(result);
// sort
if(sort){
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
}else{
    result = result.sort(createdAt);
}
//fields
if(fields){
    const fieldList = fields.split(',').join(' ');
    result = result.select(fieldList);
}
const product = await result;
      res.status(200).json({product, nbHits: product.length});
  }
  module.exports = {getAllProducts, getAllProductsStatic};

  // appti padhungii and coding bhi practice karoo brooo 
  //