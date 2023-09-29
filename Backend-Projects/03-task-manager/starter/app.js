const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connection');
require('dotenv').config();
// for getting data into req.body, we use middleware
app.use(express.json()); // for sefty purpose we use .env file, inside this file we put confidential data so that i will not be pushed to github
app.use(express.static('./public'))
// middleware
app.use('/api/v1/tasks', tasks);

const start = async ()=>{
    try{
       await connectDB(process.env.MONGO_URI);
       app.listen(3000, console.log('Server is runnig on port 3000'))
    }catch(err){
       console.log(err);
    }
}
start();
