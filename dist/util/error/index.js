"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = exports.BadRequest = exports.GeneralError = void 0;
class GeneralError extends Error {
    constructor({ message, status, details }) {
        super();
        this.status = this.setStatus(status);
        this.message = this.setMessage(message);
        this.details = this.setDetails(details);
    }
    setStatus(status) {
        if (status)
            return status;
        if (this instanceof BadRequest)
            return 500;
        if (this instanceof NotFound)
            return 404;
        return 400;
    }
    setMessage(message) {
        if (message)
            return message;
        if (this instanceof BadRequest)
            return 'Bad Request';
        if (this instanceof NotFound)
            return 'Not Found';
        return "there was an internal error";
    }
    setDetails(details) {
        if (details)
            return details;
        return [];
    }
}
exports.GeneralError = GeneralError;
class BadRequest extends GeneralError {
}
exports.BadRequest = BadRequest;
class NotFound extends GeneralError {
}
exports.NotFound = NotFound;
