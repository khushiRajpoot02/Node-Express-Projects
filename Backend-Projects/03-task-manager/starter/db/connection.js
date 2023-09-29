const mongoose = require('mongoose');

const connectDB = (url)=>{
    console.log(url, "ye url print kr rhe");
  return mongoose.connect(url,
    {
        useNewUrlParser: true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true,
    })
}

// .then(()=>console.log('Connected to db..'))
// .catch((err)=>console.log(err));

module.exports = connectDB;