require('dotenv').config();
const productModel = require('./models/products');
const jsonProduct = require('./products.json');
const connectDB = require('./db/connect');
// const start = async ()=>{
//     try{
//         await connectDB(process.env.MONGO_URI);
//         await productModel.deleteMany();
//         await productModel.create(jsonProduct);
//         console.log("success");
//         // process.exit(0);
//     }catch(err){
//        console.log(err);
//        process.exit(1);  
//     }
// }
// start();

// require('dotenv').config();
// const jsonProducts = require('./products.json');
// const Product = require('./models/product');
// const connectDB = require('./db/connect');

const start = async ()=>{
    try{
       // connectDB
    await connectDB(process.env.MONGO_URI);
    // for deleting previous data into db
     await productModel.deleteMany()
      // dumb data into db 
      await productModel.create(jsonProduct);
      console.log('Success!!!!');
      // if we do not want to file to continue runnig
      process.exit(0);

    }
    catch(err){
        // throw new Error(err);
      console.log(err);
      process.exit(1);
    }
}
start();