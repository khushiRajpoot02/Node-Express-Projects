const mongoose = require('mongoose');
const connectDB = (url)=>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
    //useCreateIndex: true, //---> No longer needed
   // useFindAndModify: false, ---> No longer needed
    useUnifiedTopology: true,
    })
}
module.exports = connectDB;