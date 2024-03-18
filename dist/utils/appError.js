"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class appError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.statusCode = statusCode;
        this.status = `${this.statusCode}`.startsWith('4') ? 'Error' : 'fail';
    }
}
exports.default = appError;
