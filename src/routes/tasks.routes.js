const express = require('express');
const controller = require('../controllers/tasks.controller.js');

const router = express.Router();

// GET /tasks
router.get('/', controller.getAllTasks);

// GET /tasks/:id
router.get('/:id', controller.getTaskById);


module.exports = router;