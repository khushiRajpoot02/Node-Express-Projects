
const getAllProductsStatic = (req, res)=>{
  res.status(201).json({msg : ' static products routes'})
}

const getAllProducts = (req, res)=>{
   res.status(201).json({msg : ' products routes'})
}
module.exports = {getAllProductsStatic, getAllProducts};