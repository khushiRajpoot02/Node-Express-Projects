// create schema and set-up all the properties here
const mongoose = require('mongoose');
const productsSchema =new mongoose.Schema({
    name :{
       type : String,
       require : [true, 'name must be provided'],
    },
    featured :{
        type : Boolean,
        default : false,
    },
    company :{
      type : String,
      enum:{
        values : ['ikea', 'liddy', 'caressa', 'marcos'],
        message : '{VALUE} is not supported',// for valid values only
        // enum:['ikea', 'liddy', 'caressa', 'marcos'],
      }
    },
    createdAt :{
      type : Date,
      default : Date.now(),
    },
    price : {
        type : Number,
        require : [true, 'product price must be provided']
    },
    rating:{
        type : Number,
        default : 4.5,
    }
})
module.exports = mongoose.model('product', productsSchema);
