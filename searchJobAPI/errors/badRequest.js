// const CustomeAPIError = require('./custome-error');
// const {StatusCodes} = require('http-status-codes');
// class  BadRequest extends CustomeAPIError{
//     constructor(message){
//        super(message);
//        this.StatusCodes = StatusCodes.BAD_REQUEST;
//     }
// }
// module.exports = BadRequest;
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custome-error');

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
module.exports = BadRequestError;
