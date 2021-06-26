"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../util/error/index");
const joi_user_1 = require("../../util/joi_schema/joi.user");
const joi_contact_details_1 = require("../../util/joi_schema/joi.contact_details");
exports.default = async (req, res, next) => {
    let { first_name, middle_name, last_name, username, active, role, primary_number, secondary_number, mobile_number, email, city, address, state, pincode, coordinates } = req.query;
    let errors = [];
    if (first_name) {
        let first_name_validation = joi_user_1.joi_first_name.validate(first_name);
        if (first_name_validation.error)
            errors.push(first_name_validation.error.details);
    }
    if (middle_name) {
        let middle_name_validation = joi_user_1.joi_middle_name.validate(middle_name);
        if (middle_name_validation.error)
            errors.push(middle_name_validation.error.details);
    }
    if (last_name) {
        let last_name_validation = joi_user_1.joi_last_name.validate(last_name);
        if (last_name_validation.error)
            errors.push(last_name_validation.error.details);
    }
    if (username) {
        let username_validation = joi_user_1.joi_username.validate(username);
        if (username_validation.error)
            errors.push(username_validation.error.details);
    }
    if (active) {
        let active_validation = joi_user_1.joi_active.validate(active);
        if (active_validation.error)
            errors.push(active_validation.error.details);
    }
    if (role) {
        let role_validation = joi_user_1.joi_role.validate(role);
        if (role_validation.error)
            errors.push(role_validation.error.details);
    }
    if (primary_number) {
        let primary_number_validation = joi_contact_details_1.joi_primary_number.validate(primary_number);
        if (primary_number_validation.error)
            errors.push(primary_number_validation.error.details);
    }
    if (secondary_number) {
        let secondary_number_validation = joi_contact_details_1.joi_secondary_number.validate(secondary_number);
        if (secondary_number_validation.error)
            errors.push(secondary_number_validation.error.details);
    }
    if (mobile_number) {
        let joi_mobile_number_validation = joi_contact_details_1.joi_mobile_number.validate(mobile_number);
        if (joi_mobile_number_validation.error)
            errors.push(joi_mobile_number_validation.error.details);
    }
    if (email) {
        let email_validation = joi_contact_details_1.joi_email.validate(email);
        if (email_validation.error)
            errors.push(email_validation.error.details);
    }
    if (address) {
        let address_validation = joi_contact_details_1.joi_address.validate(address);
        if (address_validation.error)
            errors.push(address_validation.error.details);
    }
    if (city) {
        let city_validation = joi_contact_details_1.joi_city.validate(city);
        if (city_validation.error)
            errors.push(city_validation.error.details);
    }
    if (state) {
        let state_validation = joi_contact_details_1.joi_state.validate(state);
        if (state_validation.error)
            errors.push(state_validation.error.details);
    }
    if (pincode) {
        let pincode_validation = joi_contact_details_1.joi_pincode.validate(pincode);
        if (pincode_validation.error)
            errors.push(pincode_validation.error.details);
    }
    if (coordinates) {
        let coordinates_validation = joi_contact_details_1.joi_coordinates.validate(coordinates);
        if (coordinates_validation.error)
            errors.push(coordinates_validation.error.details);
    }
    if (errors.length)
        return next(new index_1.BadRequest({ details: errors }));
    return next();
};
