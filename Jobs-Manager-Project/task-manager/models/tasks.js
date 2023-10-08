const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true, 'please provide valid name'],
    },
    completed : {
        type : String,
        default : false,
    }
})
module.exports = mongoose.model('task', taskSchema);