const {CustomAPIError} = require('../errors/custome-error');

const errorHandler = (err, req, res, next)=>{
     if(err instanceof CustomAPIError){
        res.status(err.statusCode).json({msg : err.message});
     }
     res.status(500).json({msg : "Something went wrong!!"});
}
module.exports = errorHandler;