"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joi_name = exports.joi_role = exports.joi_active = exports.joi_username = exports.joi_password = exports.joi_last_name = exports.joi_middle_name = exports.joi_first_name = exports.joi_id = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_contact_details_1 = __importDefault(require("./joi.contact_details"));
const joi_id = joi_1.default.string();
exports.joi_id = joi_id;
const joi_first_name = joi_1.default.string();
exports.joi_first_name = joi_first_name;
const joi_middle_name = joi_1.default.string();
exports.joi_middle_name = joi_middle_name;
const joi_last_name = joi_1.default.string();
exports.joi_last_name = joi_last_name;
const joi_name = joi_1.default.object({
    first_name: joi_first_name.required(),
    middle_name: joi_middle_name,
    last_name: joi_last_name.required(),
});
exports.joi_name = joi_name;
const joi_password = joi_1.default.string();
exports.joi_password = joi_password;
const joi_username = joi_1.default.string();
exports.joi_username = joi_username;
const joi_active = joi_1.default.boolean();
exports.joi_active = joi_active;
const joi_role = joi_1.default.string();
exports.joi_role = joi_role;
const joi_user = joi_1.default.object({
    name: joi_name.required(),
    username: joi_username.required(),
    password: joi_password.required(),
    contact_details: joi_contact_details_1.default.required(),
    active: joi_active.required(),
    role: joi_role.required(),
});
exports.default = joi_user;
