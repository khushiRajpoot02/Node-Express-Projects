const CustomeAPIError = require('./custome-error');
const {StatusCodes} = require('http-status-codes');
class  BadRequest extends CustomeAPIError{
    constructor(message){
       super(message);
       this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}
module.exports = BadRequest;