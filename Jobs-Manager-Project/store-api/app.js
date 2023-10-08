require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const createDB = require('./db/connect');
const mainRouter = require('./routes/product');
const routeNotFound = require('./errors/routeNot-found');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleWare')
app.use(express.json());
app.use('/api/v1',mainRouter);
app.use(routeNotFound);
app.use(errorHandlerMiddleware);

const start = async ()=>{
  try{
    await createDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listing on port ${port}`));
    // console.log('connection successful');
  } catch(err){
    console.log(err);
  }
}
start();