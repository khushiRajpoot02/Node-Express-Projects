const Job = require('../models/jobs');
const {BadRequestError, NotFoundError} = require('../errors');
const {StatusCodes} =  require('http-status-codes');
// const getAllJobs = async (req, res)=>{
// const jobs = await Job.find({createdBy : req.user.userId}).sort('createdAt');
// res.status(StatusCodes.OK).json({jobs, count : jobs.length});
//     // res.send('getting all the jobs');
// }
const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
  }

const getSingleJob = async (req, res)=>{
const {user : {userId}
, params : {Id : jobId}
} = req;// netsted de-structuring
//  const userId = req.user.userId ;
//  const jobId = req.params.Id;
const job = await  Job.findOne({
  _id : jobId, createdBy: userId
})
console.log(req.params);
if(!job){
  throw new NotFoundError(`no job associated with id ${jobId}`);
}
    res.status(StatusCodes.OK).json({job});
}
// const createJobs = async (req, res)=>{
// console.log(req.body.createdBy);
// req.body.createdBy = req.user.userId;
// const job = await Job.create(req.body);
//     res.status(StatusCodes.CREATED).json({job});
// }
const createJobs= async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
  }
const updateJob = async (req, res)=>{
  const {
    body : {company},
    body : { position},
    user : {userId},
     params : {Id : jobId}
  } = req;

    if(!company || !position){
      throw new NotFoundError('not found');
    }
    const job = await Job.findOneAndUpdate({_id : jobId, createdBy : userId},
       req.body, 
       {new: true, runValidators: true});
       if(!job){
        throw new BadRequestError(`job not found with id ${jobId}`);
       }

       res.status(StatusCodes.OK).json({job});
}
const deleteJob = async (req, res)=>{
  const {
    user : {userId},
     params : {Id : jobId}
  } = req;
const job = await Job.findByIdAndRemove({_id: jobId, createdBy:userId});
if(!job){
  throw new BadRequestError(`job not found with id ${jobId}`);
}
    res.status(StatusCodes.OK).json({job});
}
module.exports = {getAllJobs, getSingleJob, createJobs, updateJob, deleteJob};