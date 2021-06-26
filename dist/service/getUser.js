"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
exports.default = async ({ name, username, password, contact_details, isVerified, role }) => {
    let params = {};
    let users = await user_1.default.find(params);
    return { message: "success", result: users };
};
