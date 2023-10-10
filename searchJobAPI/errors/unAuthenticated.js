const CustomeAPIError = require('./custome-error');
const {StatusCodes} = require('http-status-codes');
class  Unauthenticate extends CustomeAPIError{
    constructor(message){
       super(message);
       this.StatusCodes = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = Unauthenticate;