const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/controllers');
const router = require('express').Router();



router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);


module.exports = router;