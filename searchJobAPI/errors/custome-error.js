class CustomeAPIError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomeError = (mess, statusCode )=>{
   return new CustomeAPIError(mess, statusCode);
}
module.exports = {CustomeAPIError,createCustomeError};
