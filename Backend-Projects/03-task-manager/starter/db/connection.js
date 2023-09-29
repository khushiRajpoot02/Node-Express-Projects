const mongoose = require('mongoose');
const connectionString = "mongodb+srv://khushi02:Khushi02@nodeexpressproject.t2j7zj4.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true,
    } )
.then(()=>console.log('Connected to db..'))
.catch((err)=>console.log(err));