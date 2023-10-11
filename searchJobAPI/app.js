// require('express-async-errors');
// require('dotenv').config();
// const express = require('express');
// const app = express();
// // routes
// const connectDB = require('./db/connection');

// const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
// const notFound = require('./middleware/route-notFound');

// const port = process.env.PORT || 3000;
// app.use(express.json());
// const userRouter = require('./routes/users');
// app.use('/api/v1', userRouter);
// app.use(notFound);
// app.use(errorHandlerMiddleware);
// app.get('/', (req, res)=>{
//     res.send('Hi there');
// })
// const start = async ()=>{
//   try{
//     await connectDB(process.env.MONGO_URI);
//     app.listen(port, console.log(`server is running on port ${port}`));
//     console.log('success!!');
//   }catch(err){
//     console.log(err);
//   }
// }
// start();


require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
// some extra security
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const connectDB = require('./db/connection');
const authMiddleWare = require('./middleware/authentication');
// const connectDB = require('./db/connect');
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');

// error handler
const notFoundMiddleware = require('./middleware/route-notFound');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
app.use(express.json());
// extra packages
app.set('trust proxy', 1);
app.use(rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max : 200
	
}));
 app.use(helmet());
 app.use(cors());
 app.use(xss());
// routes
app.get('/',(req, res)=>{
  res.send('jobs api');
})
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/jobs', authMiddleWare, jobsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB  
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
