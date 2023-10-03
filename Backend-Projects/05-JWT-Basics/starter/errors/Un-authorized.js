const CustomAPIError = require('./Custom-error');
const {StatusCodes} = require('http-status-codes')
class Unauthonticated extends CustomAPIError {
    constructor(message) {
      super(message)
       this.statusCode = StatusCodes.UNAUTHORIZED;
    }
  }
  
  module.exports = Unauthonticated;