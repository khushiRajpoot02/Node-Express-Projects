require('dotenv').config();// for setting the connection to the db
const connectDB = require('./db/connect');
const productsRoute = require('./routes/products');
// async errors

const express = require('express');
const app = express();
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found');

const port = process.env.PORT || 3000;
// middleware
app.use(express.json());

// routes

app.get('/', (req, res)=>{
    res.send('Hello There!!');
})

app.use('/api/v1/products', productsRoute);
// products
app.use(errorHandlerMiddleware);
app.use(notFound);

const start =async (url)=>{
   try{
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listing on ${port}`));
   }catch(err){
       console.log(err);
   }
}
start();



