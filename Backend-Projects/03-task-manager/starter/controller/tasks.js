
const getAllTasks = (req, res)=>{
    res.json('get all tasks');
}

const getSingleTask = (req, res)=>{
    res.json('Getting single task');
}
const addTask = (req, res)=>{
    res.json({id : req.params.id , mes : "added task"});
}

const updateTask = (req, res)=>{
    res.json({id : req.params.id , mes : "updated task"});
}
const deleteTask = (req, res)=>{
    res.json({id : req.params.id , mes : "deleted task"});
}

module.exports = {getAllTasks, getSingleTask, addTask, updateTask, deleteTask};