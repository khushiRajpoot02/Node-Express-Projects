const mongoose = require('mongoose');

// create new schema

const TaskSchema = new mongoose.Schema({
    name: {
       type : String,
       required : [true, 'must provide name'],
       trim : true,
       maxlength : [20, 'name can not be more than 20 chars'],
    },
    completed :{
       type : Boolean,
       default : false,
    } 
})

module.exports = mongoose.model('Task', TaskSchema);