// require('dotenv').config();
// const jwt = require('jsonwebtoken')
// const {Unauthenticate} = require('../errors');
// const {StatusCodes} = require('http-status-codes');
// const authThentication =async (err,req, res, next)=>{
//     console.log(req.headers.authorization, 'in auth');
//     const authHeader = req.headers.authorization;
//     if(!authHeader || !authHeader.startsWith('Bearer')){
//       throw new Unauthenticate('No token provided');
//     }
//     const token = authHeader.split(' ')[1];
//     try{
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       //console.log(decoded);
//       const{id, userName } = decoded;
//       req.user = {id, userName};
//       next();
//      }catch(err){
//        throw new Unauthenticate('Not authorized to access this route');
//      } 
// }
// module.exports = authThentication;

// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const {UnauthenticatedError} = require('../errors');
// const authMiddleWare = async (req, res, next)=>{
//     // const authHeader = req.headers.authorization;
//     // if(!authHeader || !authHeader.startsWith('Bearer')){
//     //     throw new UnauthenticatedError('No token provided');
//     // }
//     // const token = authHeader.split(' ')[1];
//     // // console.log(token);
//     // try{
//     //     const payload =  jwt.verify(token, process.env.JWT_TOKEN); 
//     //     console.log(payload);
//     //     req.user = {userId : payload.userId, name: payload.name};
//     //     next();
//     // }
//     // catch(err){
//     //    console.log(err);
//     // }
//         // check header
//         const authHeader = req.headers.authorization
//         if (!authHeader || !authHeader.startsWith('Bearer ')) {
//           throw new UnauthenticatedError('Authentication invalid')
//         }
//         const token = authHeader.split(' ')[1]
//         try {
//           const payload = jwt.verify(token, process.env.JWT_TOKEN)
//               // attach the user to the job routes
//           // const user = User.finById(payload.id).select('-password)
//           // req.user = user
//           // line 31 and 34 are same 
//           req.user = { userId: payload.userId, name: payload.name }
//           next()
//         } catch (error) {
//           throw new UnauthenticatedError('Authentication invalid')
//         } 
// }
// module.exports = authMiddleWare;


const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const authMiddleWare = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_TOKEN)
    // attach the user to the job routes
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid')
  }
}

module.exports = authMiddleWare














