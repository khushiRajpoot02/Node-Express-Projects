class CustomeAPIError extends Error{
    constructor(message){
        super(message);
        // this.statusCode = statusCode;
    }
}
const createCustomeError = (mess)=>{
   return new CustomeAPIError(mess);
}
module.exports = {CustomeAPIError,createCustomeError};
