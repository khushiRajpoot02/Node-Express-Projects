// require('dotenv').config();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const userSchema = new mongoose.Schema({
//     name :{
//       type : String,
//       requires : [true, 'please provide valid name'],
//     },
//     email:{
//         type:String,
//         match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
//         unique : true
//     },
//     password:{
//         type : String,
//         required : [true, 'please provide the password'],
//     }
// })
// // userSchema.pre('save', async function(next){
// //   const salt = await bcrypt.genSalt(10);
// //   this.password = await bcrypt.hash(this.password, salt);
// //   next();
// // })
// // userSchema.methods.createJWT = function(){
// // return jwt.sign({userId : user._id, name: user.name}, process.env.JWT_SECRET, {
// //         expirseIn:'30d'
// //     })
// // } 

// // userSchema.pre('save', async function(next){
// //     const salt = await bcrypt.genSalt(10);
// //     this.password = await bcrypt.hash(this.password, salt);
// //     next();
// //  } )
 
// //  userSchema.methods.createJWT = function(){
// //     return jwt.sign({userId: this._id, name : this.name},process.env.JWT_SECRET , {
// //          expiresIn: '30d'
// //            //JWT_TOKEN=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKBKpmMm6i6rjBFcCwzW5ybtjGBzWVIiRYUW0JgsNu8LMcvmnqrKNxzok1PPMSMaNdAVDdHvS4COvm9gFgkpO28CAwEAAQ==
// //     })
// //  }

// userSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//  })
 
 
//  userSchema.methods.createJWT = function(){
//     return jwt.sign({userId: this._id, name : this.name},process.env.JWT_SECRET , {
//          expiresIn:  process.env.JWT_LIFETIME
//            //JWT_TOKEN=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKBKpmMm6i6rjBFcCwzW5ybtjGBzWVIiRYUW0JgsNu8LMcvmnqrKNxzok1PPMSMaNdAVDdHvS4COvm9gFgkpO28CAwEAAQ==
//     })
//  }
//  userSchema.methods.comparePassword = async function(isCandidate){
//     const isMatch = await bcrypt.compare(isCandidate, this.password);
//     return isMatch;
//  }

// module.exports = mongoose.model('User', userSchema );
// // user me register krna hai phr us user ke sth token generate krna hai
// // after that will send email and password for login
require('dotenv').config()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
   name:{
      type : String,
      require:[true, 'Please provide valid name'],
   },
   email : {
    type : String,
    match : [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email'],
    // minlength: 5,
    // maxlength : 50,
    unique : true
   },
   password:{
    type : String,
    require : [true, 'Please provide password'],
    // minlength : 6,
    // maxlength : 12
   }
})
userSchema.pre('save', async function(next){
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
   next();
} )

userSchema.methods.createJWT = function(){
   return jwt.sign({userId: this._id, name : this.name},process.env.JWT_SECRET , {
        expiresIn:  process.env.JWT_LIFETIME
          //JWT_TOKEN=MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKBKpmMm6i6rjBFcCwzW5ybtjGBzWVIiRYUW0JgsNu8LMcvmnqrKNxzok1PPMSMaNdAVDdHvS4COvm9gFgkpO28CAwEAAQ==
   })
}
userSchema.methods.comparePassword = async function(isCandidate){
   const isMatch = await bcrypt.compare(isCandidate, this.password);
   return isMatch;
}
module.exports = mongoose.model('User', userSchema);