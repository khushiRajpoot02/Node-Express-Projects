// const CustomeAPIError = require('./custome-error');
// const {StatusCodes} = require('http-status-codes');
// class  Unauthenticate extends CustomeAPIError{
//     constructor(message){
//        super(message);
//        this.StatusCodes = StatusCodes.UNAUTHORIZED;
//     }
// }

// module.exports = Unauthenticate;
const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
