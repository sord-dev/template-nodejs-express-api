// https://youtu.be/vAH4GRWbAQw - Error Handling in Node.js with Express.js

module.exports.AppErrorTypes = {
    BadRequest: {name: 'BadRequest', statusCode: 400, description: 'Bad Request', isOperational: true},
    Unauthorized: {name: 'Unauthorized', statusCode: 401, description: 'Unauthorized', isOperational: true},
    Forbidden: {name: 'Forbidden', statusCode: 403, description: 'Forbidden', isOperational: true},
    NotFound: {name: 'NotFound', statusCode: 404, description: 'Not Found', isOperational: true},
    InternalServerError: {name: 'InternalServerError', statusCode: 500, description: 'Internal Server Error', isOperational: false},
    NotImplemented: {name: 'NotImplemented', statusCode: 501, description: 'Not Implemented', isOperational: true},
    ServiceUnavailable: {name: 'ServiceUnavailable', statusCode: 503, description: 'Service Unavailable', isOperational: true},
}

class AppError extends Error {
    constructor(name, statusCode, description, isOperational) {
        super(description);

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }

    static sendErrorResponse(res, error) {
        const { name, statusCode, message } = error;
        return res.status(statusCode).json({ status: name, message });
    }

    static passErrorToNext(type, next) {
        const { name, isOperational, statusCode, description } = type;
        const err = new AppError(name, statusCode, description, isOperational);
        return next(err);
    }
}

module.exports.AppError = AppError;