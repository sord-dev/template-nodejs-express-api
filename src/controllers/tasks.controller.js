const { TaskItemService } = require('../services');
const { AppError, AppErrorTypes, AppResponse, AppResponseTypes } = require('../utils');

// tasks.controller.js

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskItemService.getAllTasks()

        return AppResponse.sendResponse(res, tasks, AppResponseTypes.SuccessfulResponse)
    } catch (error) {
        if (error instanceof AppError) {
            return next(error)
        }

        AppError.passErrorToNext(AppErrorTypes.InternalServerError, next)
    }
};

// Get a single task by ID
const getTaskById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const task = await TaskItemService.getTaskItemById(id)

        if (!task) {
            const { name, isOperational, statusCode } = AppErrorTypes.NotFound;
            const err = new AppError(name, statusCode, 'The requested for task item was not found.', isOperational)
            return next(err)
        }

        return AppResponse.sendResponse(res, task, AppResponseTypes.SuccessfulResponse)
    } catch (error) {
        if (error instanceof AppError) {
            return next(error)
        }

        AppError.passErrorToNext(AppErrorTypes.InternalServerError, next)
    }
};

// Export controller functions
module.exports = {
    getAllTasks,
    getTaskById,
};