const express = require('express');
const router = express.Router();
const {getSingleTask, getAllTasks, addTask, updateTask, deleteTask} = require('../controller/tasks');
router.get('/', getAllTasks)
router.get('/:id', getSingleTask)
router.post('/:id', addTask)
router.patch('/:id', updateTask)
router.delete('/:id',deleteTask)

module.exports = router;