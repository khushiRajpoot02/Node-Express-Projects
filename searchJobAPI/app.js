require('dotenv').config();
const express = require('express');
const app = express();
// routes
const connectDB = require('./db/connection');

const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const notFound = require('./middleware/route-notFound');

const port = process.env.PORT || 3000;
app.use(express.json());
const userRouter = require('./routes/users');
app.use('/api/v1', userRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);
app.get('/', (req, res)=>{
    res.send('Hi there');
})
const start = async ()=>{
  try{
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}`));
    console.log('success!!');
  }catch(err){
    console.log(err);
  }
}
start();

