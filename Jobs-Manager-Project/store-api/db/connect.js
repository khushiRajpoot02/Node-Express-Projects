const mongoose = require('mongoose');

const createDB =(url)=>{ 
    return mongoose.connect(url, {
        useNewUrlParser: true,
    useUnifiedTopology: true,

})}
module.exports = createDB;