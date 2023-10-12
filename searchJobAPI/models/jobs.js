const mongoose = require('mongoose');
const jobsSchema = new mongoose.Schema({
   // company:{
   // type : String,
   // required:[true, 'please provide company name'],
   // maxlength : 50
   // },
   // position:{
   //  type : String,
   //  required : [true, 'please provide position'],
   //  maxlength:50
   // },
   // createdBy:{
   //    type : mongoose.Types.ObjectId,//tieing job to actual user 
   //    // whenever new job will be created it will assign to the user
   //       ref : 'User',
   //     required:[true, 'please provide user']
   // },
   // status:{
   //    type : String,
   //    enum : ['interview', 'declined', 'pending'],
   //    default : 'pending',
   // }
   company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },

},{timestamps:true})
module.exports = mongoose.model('Job', jobsSchema);

