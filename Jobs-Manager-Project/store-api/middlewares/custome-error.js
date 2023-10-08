class CustomeAPIError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}
const createCustomeError = (message, statusCode)=>{
    return new CustomeAPIError(message, statusCode);
}
module.exports = {CustomeAPIError,createCustomeError };