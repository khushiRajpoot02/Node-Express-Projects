// check username and password in post(login) request
// if exist create new JWT
// send back to the frontend
// setup authentication so only the request with jwt can access the dashboard

// we have three method to throw an error
   // 1 mongoose validation
   // 2 joi (another layer for authentication)
   // 3 our own validator which we have set in task manager app
   const jwt = require('jsonwebtoken');
   require('dotenv').config();
   const {Badrequest} = require('../errors');

const authMiddleware = require('../middleware/auth');
const login = async (req, res)=>{
    const {userName, password} = req.body;
    // console.log(userName, password);
    if(!userName || !password){
      throw new Badrequest(`please provide username and password`);
    }
    // for time being i am creating id, once have the db setup it will be coming from db itself
    const id =new Date().getDate();
//keep payload simple
const token = jwt.sign({userName, id}, process.env.JWT_SECRET, {expiresIn : '30d'});
  res.json({mag : 'success', token});
}
const dashboard = async (req, res)=>{
  //console.log(req.headers);
//   const authHeader = req.headers.authorization;
// if(!authHeader || !authHeader.startsWith('Bearer ')){
//   throw new CustomAPIError('No token provided', 401);
// }
// const token = authHeader.split(' ')[1];
// console.log(token);
console.log(req.user);
const luckyNo = Math.floor(Math.random()*100)
res.status(201).json({msg : `Hello there ${req.user.userName}` , secrete : `this is your authorized data ${luckyNo}`});
}

module.exports = {login, dashboard};