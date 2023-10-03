const express = require('express');
const router = express.Router();
const {updateJob,addJobs,getSingleJob,getAllJobs,deleteJob} = require('../controllers/jobs')
router.get('/', getAllJobs);
router.post('/', addJobs);
router.get('/:Id', getSingleJob);
router.patch('/:Id', updateJob);
router.delete('/:Id', deleteJob);
module.exports = router;



