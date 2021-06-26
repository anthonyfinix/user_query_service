"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = async ({ mongoURI, options }) => {
    if (!mongoURI)
        return { error: "no url provided" };
    if (!options)
        options = {};
    try {
        return { connection: await mongoose_1.default.connect(mongoURI, options) };
    }
    catch (e) {
        return { error: e };
    }
};
