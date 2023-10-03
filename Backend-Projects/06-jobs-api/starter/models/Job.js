const mongoose = require('mongoose');
const jobsSchema = new mongoose.Schema({
   name:{
   type : String,
   require:[],
   },
   completed:{
    type : Boolean,
   }
})
module.exports = mongoose.model('jobs', jobsSchema);

