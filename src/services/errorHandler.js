class ErrorHandler {
    static async handleError(err) {
        // here we can log the error to a file, database, or any other logging service
        console.log(err)
    }

    static isOperationalError(err) {
        return err.isOperational;
    }
}

module.exports = ErrorHandler;