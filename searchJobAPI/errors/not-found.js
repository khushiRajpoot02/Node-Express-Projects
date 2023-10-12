// const CustomeAPIError = require('./custome-error');
// const {StatusCodes} = require('http-status-codes');
// class  NotFound extends CustomeAPIError{
//     constructor(message){
//        super(message);
//        this.StatusCodes = StatusCodes.NOT_FOUND;
//     }
// }
// module.exports = NotFound;
const {StatusCodes} = require('http-status-codes');
const CustomAPIError = require('./custome-error');

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
