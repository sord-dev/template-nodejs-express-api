module.exports.AppResponseTypes = {
    SuccessfulResponse: {
        name: 'SuccessfulResponse',
        statusCode: 200
    },
    CreatedResponse: {
        name: 'CreatedResponse',
        statusCode: 201
    },
    NoContentResponse: {
        name: 'NoContentResponse',
        statusCode: 204
    }
}

class AppResponse {
    constructor(name, statusCode) {
        this.name = name
        this.statusCode = statusCode
    }

    static sendResponse(res, data, responseType) {
        const { name, statusCode } = responseType;
        return res.status(statusCode).json({ status: name, data });
    }
}

module.exports.AppResponse = AppResponse;