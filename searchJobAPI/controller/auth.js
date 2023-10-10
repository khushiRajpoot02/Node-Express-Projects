const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');// for crypting the password
const userModel = require('../models/users')
const register = async(req, res)=>{
    // const {data} = req.body;
 const {name, email, password} = req.body;
    console.log(req.body);
    const id = Date.now();
    const token = jwt.sign({name, id}, process.env.JWT_SECRET, {expiresIn:'30d'})
    const userData = await userModel.create({...req.body});
    res.status(200).json({msg : 'success', token});
}
const login = async (req, res)=>{
// authorization
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(500).send('bad error');
    }
    res.send('user logged in');
 }

module.exports  = {login, register};
