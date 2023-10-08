const {CustomAPIError} = require('./custome-error');
const errorHandlerMiddleware = (err, req, res, next)=>{
   if(err instanceof CustomAPIError){
    res.status(err.statusCode).json(err.message);
   }
   res.status(500).json('Something went wrong!!');
}
module.exports = errorHandlerMiddleware;