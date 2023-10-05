// require('dotenv').config();
// const User = require('../models/User')
// const{StatusCodes} = require('http-status-codes');
// const jwt = require('jsonwebtoken');
// const { BadRequestError, UnauthenticatedError } = require('../errors');
// const register = async (req, res)=>{
// console.log(req.body);
//  const user =  await User.create({...req.body});
// //  const {name, email, password} = req.body;
// //  const token = jwt.sign({userId: user._id, useName :user.name },process.env.JWT_TOKEN, {expiresIn : '30d'});
// const token = await user.createJWT()// used schema instance method
// res.status(StatusCodes.CREATED).json({userName :{name : user.name}, token});
// }
// const login = async (req, res)=>{
// const {email, password} = req.body;
//    if(!email || !password){
//     throw new BadRequestError('Please provide email and password');
//    }
//    const user =  await User.findOne({email});
//    if(!user){
//     throw new UnauthenticatedError('Invalid credentials');
//    }
//    const isPassworMatched = await user.comparePassword(password);
//    if(!isPassworMatched){
//     throw new UnauthenticatedError('Invalid credentials');
//    }
//    const token = await user.createJWT();
//    res.status(StatusCodes.OK).json({user : {name : user.name}, token});
// }
// module.exports = {register, login};

const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

module.exports = {
  register,
  login,
}
