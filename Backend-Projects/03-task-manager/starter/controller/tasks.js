const Task = require('../models/Task');
const {createCustomeError} = require('../errors/custome-error');
const asyncWrapper = require('../middlewares/async')
const getAllTasks = asyncWrapper( async (req, res)=>{
        const tasks = await Task.find({});
        res.status(201).send({tasks});
    //    res.status(401).json({msg : err});
    // res.json('get all tasks');
})

const getSingleTask = asyncWrapper(async (req, res, next)=>{
   // setting custome error msg using js Error class instance
        const {id : taskId} = req.params;
      const task = await Task.findOne({_id : taskId});
      if(!task){
        // this is for different id which does not match
        // const error = new Error('Not found');
        // error.status = 404;
        

        return next(createCustomeError(`No task found with id ${taskId}`, 404));
      //  return res.send(400).json({msg : `task not found with id ${taskId}`})
      }
      res.status(201).json({task});
    //   res.status(401).json({msg : err});
    // res.json('Getting single task');
})
const addTask = asyncWrapper(async (req, res)=>{
    // const data = req.body;
    const task = await Task.create(req.body);
    res.status(201).json({task});
      res.status(500).json({msg : err})
})

const updateTask = asyncWrapper(async (req, res)=>{
    // setting custome error msg using js Error class instance
      const {id : taskId} = req.params;
      const task = await Task.findOneAndUpdate({_id : taskId}, req.body, {
        new : true,
        runValidators:true
      })
      if(!task){
        return next(createCustomeError(`No task found with id ${taskId}`, 404));
      //  return res.send(400).json({msg : `task not found with id ${taskId}`})
      }
      res.status(201).json({task});
    
})
const deleteTask = asyncWrapper(async (req, res)=>{
  // setting custome error msg using js Error class instance
      const {id : taskId} = req.params;
      const task = await Task.findOneAndDelete({_id : taskId});
      if(!task){
        return next(createCustomeError(`No task found with id ${taskId}`, 404));
      //  return res.send(400).json({msg : `task not found with id ${taskId}`})
      }
      res.status(201).json({task});
      // res.status(201).send();
      // res.status(201).json({task : null, status : sucess});
})

module.exports = {getAllTasks, getSingleTask, addTask, updateTask, deleteTask};