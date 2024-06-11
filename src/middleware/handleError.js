const errorHandlingService = require('../services/errorHandler.js');
const { AppError } = require('../utils/app-error.js');

const handleError = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    
    errorHandlingService.handleError(err);
    console.error(err);
    
    AppError.sendErrorResponse(res, err)
};

module.exports = handleError;