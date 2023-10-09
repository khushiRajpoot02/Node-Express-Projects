require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const notFound = require('./middleware/route-notFound');
const port = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/v1', userRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);
app.get('/', (req, res)=>{
    res.send('Hi there');
})
app.listen(port, console.log(`server is running on port ${port}`));