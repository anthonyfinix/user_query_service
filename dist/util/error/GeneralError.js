"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class GeneralError extends Error {
    constructor(message = "there was an error") {
        super();
        this.status = 500;
        this.details = [];
        this.message = message;
        this.setCode();
    }
    setCode() {
        if (this instanceof BadRequest_1.default) {
            this.status = 400;
        }
        if (this instanceof NotFound_1.default) {
            this.status = 404;
        }
        this.status = 500;
    }
}
const BadRequest_1 = __importDefault(require("./BadRequest"));
const NotFound_1 = __importDefault(require("./NotFound"));
exports.default = GeneralError;
