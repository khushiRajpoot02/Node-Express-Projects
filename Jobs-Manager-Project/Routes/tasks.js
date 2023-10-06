const express = require('express');
const router = express.Router();
const {getSingleTask, getAllTasks, updateTasks, createTasks, deleteTasks } = require('../Controllers/task')
router.get('/', getAllTasks);
router.post('/', createTasks);
router.get('/:Id', getSingleTask);
router.patch('/:Id', updateTasks);
router.delete('/:Id', deleteTasks);
module.exports = router;
