 const taskModel = require('../models/tasks');
 const asyncWrapper = require('../middlewares/async');
 const {customeCreateError} = require('../errors/custome-error');
 const createTasks = asyncWrapper(async (err,req, res)=>{
  const tasks = await taskModel.create(req.body);
 return  res.status(200).json({tasks});
 // return res.status(500).json({err})
})
 const getSingleTask = asyncWrapper(async(err, req, res)=>{
  const {Id : taskId} = req.params;
  console.log(req.params);
  const task = await taskModel.findOne({_id:taskId});
  if(!task){
   return next(customeCreateError(`no task found with id${taskId}`), 404)
  }
  console.log(task);
  res.status(200).json({task});
  //
}  ) 
 const getAllTasks =asyncWrapper(async(err, req, res)=>{
  const tasks = await taskModel.find({});
  if(!tasks){
    return next(customeCreateError(`no task found with id${Id}`), 404);
  }
   res.status(201).json({tasks});
}) 
 const updateTasks =asyncWrapper(async(err,req, res)=>{
  const {Id : taskId} = req.params;
   const task = await taskModel.findOneAndUpdate({_id :taskId},req.body, {
     new : true,
     runValidators : true
   } )
   if(!task){
     return next(customeCreateError(`no task found with id${taskId}`), 404);
   }
   res.status(201).json({task});
}) 
 const  deleteTasks = asyncWrapper(async(err,req, res)=>{
  // now delete the task
  const {Id : taskId} = req.params;
  const task = await taskModel.findOneAndDelete({_id: taskId});
   res.status(201).json({task});
}) 
 module.exports = {getSingleTask, getAllTasks, updateTasks, createTasks, deleteTasks };

 // start setting error handlers and many more functionality

 // how many types of error can be found
 // 1 route not found
 // empty task
 // 
 /*
      creating CRUD application again here
const getSingleTask = async(req, res)=>{
   const {Id : taskId} = req.params;
  try{
    const task = await TaskModel.findOne({_id : taskId});
    res.status(201).json({task});
  }catch(err){
    res.status(500).send(`task not found with id ${taskId}`);
  }
}

const getAllTasks = async (req, res)=>{
  try{
    const tasks = await Tasks.find({});
    res.status(500).json({tasks});
  }catch(err){
    res.status(505).send('tasks not found');
  }
}
const createTask = async(req, res)=>{
  try{
    const task = await TaskModel.create(req.body);
    res.status(201).json({task});
  }catch(err){
    res.status(500).send(`task not found with id ${taskId}`);
  }
}
const updateTask = async(req, res)=>{
  const {Id : taskId} = req.params
  try{
    const task = await TaskModel.findOneAndUpdate({_id : taskId}, req.body, {
      new : true,
      runValidators:true
    });
    res.status(201).json({task});
  }catch(err){
    res.status(500).send(`task not found with id ${taskId}`);
  }
}
const deleteTask = async(req, res)=>{
   const {Id : taskId} = req.params
  try{
    const task = await TaskModel.findOneAndDelete({_id : taskId});
    res.status(201).json({task});
  }catch(err){
    res.status(500).send(`task not found with id ${taskId}`);
  }
}

code bhi basic sa tha but mere se nahi huaa, laanat hai mere pe yrrr 
  */