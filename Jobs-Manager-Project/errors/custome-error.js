class CustomAPIError extends Error{
   constructor(message, statusCode){
    super(message);
    this.statusCode = statusCode;
   }
}

const customeCreateError = ()=>{
  return  new CustomAPIError(message, statusCode);

}
module.exports = {CustomAPIError,customeCreateError};