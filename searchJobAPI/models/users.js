const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name :{
      type : String,
      requires : [true, 'please provide valid name'],
    },
    email:{
        type:String,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
        unique : true
    },
    password:{
        type : String,
        required : [true, 'please provide the password'],
    }
})

module.exports = mongoose.model('User', userSchema );
// user me register krna hai phr us user ke sth token generate krna hai
// after that will send email and password for login
