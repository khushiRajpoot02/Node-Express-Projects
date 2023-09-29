require('./db/connection');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
// for getting data into req.body, we use middleware
app.use(express.json());
app.get('/hello', (req, res)=>{
    console.log('User hit the server');
    res.send('Hello World');
})
app.use('/api/v1/tasks', tasks);


app.listen(3000, ()=>{
    console.log('Server is runnig on port 3000');
})
