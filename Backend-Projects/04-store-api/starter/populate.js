require('dotenv').config();
const jsonProducts = require('./products.json');
const Product = require('./models/product');
const connectDB = require('./db/connect');

const start = async ()=>{
    try{
       // connectDB
    await connectDB(process.env.MONGO_URI);
    // for deleting previous data into db
     await Product.deleteMany()
      // dumb data into db 
      await Product.create(jsonProducts);
      console.log('Success!!!!');
      // if we do not want to file to runnig
      process.exit(0);

    }
    catch(err){
      console.log(err);
      process.exit(1);
    }
}
start();