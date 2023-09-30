const Task = require('../models/Task');
const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.status(201).send({tasks});
    }catch(err){
       res.status(401).json({msg : err});
    }
   
    // res.json('get all tasks');
}

const getSingleTask = async (req, res)=>{
    try{
        const {id : taskId} = req.params;
      const task = await Task.findOne({_id : taskId});
      if(!task){
       return res.send(400).json({msg : `task not found with id ${taskId}`})
      }
      res.status(201).json({task});
    }catch(err){
      res.status(401).json({msg : err});
    }
    // res.json('Getting single task');
}
const addTask =async (req, res)=>{
try{
    // const data = req.body;
    const task = await Task.create(req.body);
    res.status(201).json({task});
}catch(err){
      res.status(500).json({msg : err})
} 
}

const updateTask = async (req, res)=>{
    try{
        const {id : taskId} = req.params;
      const task = await Task.findOneAndUpdate({_id : taskId}, req.body, {
        new : true,
        runValidators:true
      })
      if(!task){
       return res.send(400).json({msg : `task not found with id ${taskId}`})
      }
      res.status(201).json({task});
    }catch(err){
      res.status(401).json({msg : err});
    }
}
const deleteTask = async (req, res)=>{
    try{
        const {id : taskId} = req.params;
      const task =await Task.findOneAndDelete({_id : taskId});
      if(!task){
       return res.send(400).json({msg : `task not found with id ${taskId}`})
      }
      res.status(201).json({task});
      // res.status(201).send();
      // res.status(201).json({task : null, status : sucess});
    }catch(err){
      res.status(401).json({msg : err});
    }
}

module.exports = {getAllTasks, getSingleTask, addTask, updateTask, deleteTask};