const modelProduct = require('../models/product')
const getAllProductsStatic = async (req, res)=>{
  // const products = req.query;
  // const search = 'i';
   const product =  await modelProduct.find({price : {$gt : 30}})
   .sort('price')
   .select('name price')
  //  .limit(5)
  //  .skip(1);
   // setting basic sort
   res.status(201).json({product, nbHits : product.length})
}
const getAllProducts = async (req, res)=>{
  // inbuilt async error 
 // throw new Error('testing async error');
const {featured, name, company, sort, fields, numericFilters} = req.query;
const queryObj = {}
if(featured){
  queryObj.featured = (featured === 'true' ? true : false);
}
if(company){
  queryObj.company = company;
}
if(name){
  queryObj.name = {$regex : name, $options : 'i'}
}

if(numericFilters){
  const operatorMap = {
      '>':'$gt',
      '>=':'$gte',
      '=' : 'eq',
      '<':'$lt',
      '<=':'$lt'
  }
  const rgex = /\b(<|>|<=|>=|=)\b/g ;
  let filters = numericFilters.replace(rgex,
     (match)=>`-${operatorMap[match]}-`
      )
      console.log(filters);
      const options = ['price', 'rating'];
      filters = filters.split(',').forEach((item)=>{
        const [fields, operator, value] = item.split('-');
        if(options.includes(fields)){
           queryObj[fields] = {[operator] : Number(value)}
        }
      })
  // console.log(numericFilters);
}
let result = modelProduct.find(queryObj);
if(sort){
  const sortList = sort.split(',').join(' ');
  result = result.sort(sortList);
  // console.log(sort);
}
else{
  result = result.sort('createdAt');
}
if(fields){
  const fieldsList = fields.split(',').join(' ');
  result = result.select(fieldsList);
}
// applying skip and filter func here
const page = Number (req.query.page);
const limit = Number (req.query.limit);
const skip = (page-1)*limit;
// 23 products 
// dividing it into 7 kaa limit = 4 pages each contains 7 limit and last one = 2 limi
// 4 page = 7, 7, 7, 2 = 7 ke limit ke 4 page bane

result = result.skip(skip).limit(limit);

// numericFilter

console.log(queryObj);
const product = await result;
//modelProduct.find(queryObj);
 res.status(201).json({product, nbHits : product.length});
}
module.exports = {getAllProductsStatic, getAllProducts};