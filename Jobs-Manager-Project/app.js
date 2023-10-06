require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mainRouter = require('./Routes/tasks');
const connectDB = require('./db/connect')
app.use(express.json());
app.use('/api/v1', mainRouter);
app.get('/api/v1/get', (req, res)=>{
    res.send('Hey there!');
})

const start =async ()=>{
try{
      // connect db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log('server is listing on port 3000'));
    console.log('successfull!!');
 }catch(err){
        console.log(err);
    }
}
start();


