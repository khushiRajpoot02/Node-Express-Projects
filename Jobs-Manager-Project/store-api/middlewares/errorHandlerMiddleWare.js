const {CustomeAPIError} = require('../errors/custome-error');
const errorHandlerMiddleware = (err, req, res, next)=>{
   if(err instanceof CustomeAPIError){
    res.status(err.statusCode).json({msg: err.message});
   }
   res.status(500).json('Something went wrong!!');
}
module.exports = errorHandlerMiddleware;