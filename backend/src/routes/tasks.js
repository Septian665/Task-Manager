import express from 'express';
import { getTask, addTask, getTaskById, updateTask, deleteTask } from '../controllers/TaskController.js';

let router = express.Router();

router.post('/task', addTask);
router.get('/task', getTask);
router.route('/task/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

export default router;
