"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BadRequest_1 = __importDefault(require("./BadRequest"));
const NotFound_1 = __importDefault(require("./NotFound"));
const GeneralError_1 = __importDefault(require("./GeneralError"));
exports.default = {
    General: GeneralError_1.default,
    NotFound: NotFound_1.default,
    BadRequest: BadRequest_1.default
};
