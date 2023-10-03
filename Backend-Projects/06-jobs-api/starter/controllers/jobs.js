const Job = require('../models/Job');


const getAllJobs = async (req, res)=>{
    res.send('getting all the jobs');
}
const getSingleJob = async (req, res)=>{
    res.send('getting single job');
}
const addJobs = async (req, res)=>{
    res.send('sending job');
}
const updateJob = async (req, res)=>{
    res.send('updating job');
}
const deleteJob = async (req, res)=>{
    res.send('deleting job');
}
module.exports = {getAllJobs, getSingleJob, addJobs, updateJob, deleteJob};