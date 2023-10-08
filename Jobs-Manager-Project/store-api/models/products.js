// now start creating schema 
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
      type : String,
      required : [true, 'provide valia name'],
    },
    company : {
      type : String,
      //enum: ['caressa', 'liddy', 'ikea', 'marcos',],  
      enum:{
        values : ['caressa', 'liddy', 'ikea', 'marcos',],
        message: '{VALUE} is not supported'
      }
    },
    price:{
       type : Number,
       required:[true, 'price must provide price']
    },
    rating:{
      type : Number,
      default : 4.5
    },
   featured:{
       type : Boolean,
       default : false
    },
    createdAt : {
       type : Date,
       default : Date.now(),
    }
})
module.exports = mongoose.model('productModel', productSchema);
