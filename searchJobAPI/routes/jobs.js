const express = require('express');
const router = express.Router();
const {updateJob,createJobs,getSingleJob,getAllJobs,deleteJob} = require('../controller/jobs')
router.get('/', getAllJobs);
router.post('/', createJobs);
router.get('/:Id', getSingleJob);
router.patch('/:Id', updateJob);
router.delete('/:Id', deleteJob);
module.exports = router;



