"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getUser_1 = __importDefault(require("../service/getUser"));
exports.default = async (req, res, next) => {
    let { first_name, middle_name, last_name, username, active, role, primary_number, secondary_number, mobile_number, email, city, address, state, pincode, coordinates } = req.query;
    let params = {};
    if (first_name)
        params.name.first_name = first_name;
    if (middle_name)
        params.name.middle_name = middle_name;
    if (last_name)
        params.name.last_name = last_name;
    if (username)
        params.username = username;
    if (active)
        params.active = active;
    if (role)
        params.role = role;
    if (username)
        params.username = username;
    if (primary_number)
        params.contact_details.primary_number = primary_number;
    if (secondary_number)
        params.contact_details.secondary_number = secondary_number;
    if (mobile_number)
        params.contact_details.mobile_number = mobile_number;
    if (email)
        params.contact_details.email = email;
    if (city)
        params.contact_details.city = city;
    if (address)
        params.contact_details.address = address;
    if (state)
        params.contact_details.state = state;
    if (pincode)
        params.contact_details.pincode = pincode;
    if (coordinates)
        params.contact_details.coordinates = coordinates;
    let { error, result } = await getUser_1.default(params);
};
