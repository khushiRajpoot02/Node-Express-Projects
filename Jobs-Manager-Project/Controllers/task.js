 const taskModel = require('../models/tasks');
 const createTasks = async(req, res)=>{
   //const {name, completed} = req.body;
   const tasks = await taskModel.create(req.body);
   console.log(req.body);
   res.status(200).json({tasks});
   // res.send("creating task");
}
 const getSingleTask = async(req, res)=>{
   const {Id} = req.params;
   console.log(req.params);
   const task = await taskModel.findOne({_id:Id});
   console.log(task);
   res.status(200).json({task});
   //
 }  
 const getAllTasks = async(req, res)=>{
   const tasks = await taskModel.find({});
    res.status(201).json({tasks});
 }
 const updateTasks = async(req, res)=>{
   const {Id : taskId} = req.params;
    const task = await taskModel.findOneAndUpdate({_id :taskId},req.body, {
      new : true,
      runValidators : true
    } )
    res.status(201).json({task});
 }
 const  deleteTasks = async(req, res)=>{
   // now delete the task
   const {Id : taskId} = req.params;
   const task = await taskModel.findOneAndDelete({_id: taskId});
    res.status(201).json({task});
 }
 module.exports = {getSingleTask, getAllTasks, updateTasks, createTasks, deleteTasks };