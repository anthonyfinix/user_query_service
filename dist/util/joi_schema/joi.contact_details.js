"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joi_coordinates = exports.joi_pincode = exports.joi_state = exports.joi_city = exports.joi_address = exports.joi_email = exports.joi_mobile_number = exports.joi_secondary_number = exports.joi_primary_number = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_primary_number = joi_1.default.number().required();
exports.joi_primary_number = joi_primary_number;
const joi_secondary_number = joi_1.default.number();
exports.joi_secondary_number = joi_secondary_number;
const joi_mobile_number = joi_1.default.number();
exports.joi_mobile_number = joi_mobile_number;
const joi_email = joi_1.default.string().email().required();
exports.joi_email = joi_email;
const joi_city = joi_1.default.string().required();
exports.joi_city = joi_city;
const joi_address = joi_1.default.string();
exports.joi_address = joi_address;
const joi_state = joi_1.default.string().required();
exports.joi_state = joi_state;
const joi_pincode = joi_1.default.number().required();
exports.joi_pincode = joi_pincode;
const joi_coordinates = joi_1.default.array().items(joi_1.default.number());
exports.joi_coordinates = joi_coordinates;
const joi_contact_details = joi_1.default.object({
    primary_number: joi_primary_number,
    secondary_number: joi_secondary_number,
    mobile_number: joi_mobile_number,
    email: joi_email,
    address: joi_address,
});
exports.default = joi_contact_details;
