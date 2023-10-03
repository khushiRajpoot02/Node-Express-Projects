const User = require('../models/User')
const{StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');
const bcrypt = require('bcryptjs');
const register = async (req, res)=>{
  console.log(req.body);
  // custome error
const {name, email, password} = req.body;
//   if(!name  || !email || !password){
//     throw new BadRequestError('please provide name, email and password');
//   }
 //Hashing password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password, salt);
 const tmpuser = {name, email, password : hashedPassword};
 const user =  await User.create({...tmpuser});
    res.status(StatusCodes.CREATED).json({user});
}
const login = async (req, res)=>{
    res.send('user login');
}
module.exports = {register, login};