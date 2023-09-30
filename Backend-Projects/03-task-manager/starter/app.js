const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connection');
const notFound = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHanddler');
require('dotenv').config();
// for getting data into req.body, we use middleware
app.use(express.json()); // for sefty purpose we use .env file, inside this file we put confidential data so that i will not be pushed to github
app.use(express.static('./public'))
// middleware
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;
const start = async ()=>{
    try{
       await connectDB(process.env.MONGO_URI);
       app.listen(port, console.log(`Server is runnig on port ${port}`))
    }catch(err){
       console.log(err);
    }
}
start();
