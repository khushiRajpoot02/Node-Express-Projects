// creating child custome error which extends parent class of js
class CustomeAPIError extends Error{
  constructor(message, statusCode){
    super(message);// it will call parent constructor and, we can access all parent properties
    this.statusCode = statusCode;
  }
} 

const createCustomeError = (msg, statusCode)=>{
    return new CustomeAPIError(msg, statusCode);
}
module.exports = {CustomeAPIError, createCustomeError};