// // class CustomeAPIError extends Error{
// //     constructor(message){
// //         super(message);
// //         // this.statusCode = statusCode;
// //     }
// // }
// // const createCustomeError = (mess)=>{
// //    return new CustomeAPIError(mess);
// // }
// // module.exports = {CustomeAPIError,createCustomeError};
// class CustomAPIError extends Error {
//     constructor(message) {
//       super(message)
//     }
//   }
  
//   module.exports = CustomAPIError
  
class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

module.exports = CustomAPIError
