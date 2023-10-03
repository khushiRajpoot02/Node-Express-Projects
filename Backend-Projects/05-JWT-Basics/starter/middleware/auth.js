const jwt = require('jsonwebtoken');
const {Unauthonticated} = require('../errors');

const authMiddleware = async (req, res, next)=>{
     console.log(req.headers.authorization, 'in auth');
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
      throw new Unauthonticated('No token provided');
    }
    const token = authHeader.split(' ')[1];
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(decoded);
      const{id, userName } = decoded;
      req.user = {id, userName};
      next();
     }catch(err){
       throw new Unauthonticated('Not authorized to access this route');
     }  
}

module.exports = authMiddleware;