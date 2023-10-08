const {CustomAPIError} = require('../errors/custome-error');

const errorHandler = (err, req, res, next)=>{
    if(err instanceof CustomAPIError){
    return  res.status(err.statusCode).json({msg : err.message});
    }
    res.status(500).json('something went wrong');
}
module.exports = errorHandler;