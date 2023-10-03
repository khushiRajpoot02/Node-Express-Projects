const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

// userSchema.pre('save', async function(next){
//    const salt = await bcrypt.genSalt(10);
//    this.password = await bcrypt.hash(this.password, salt);
//    next();
// } )


module.exports = mongoose.model('User', userSchema);