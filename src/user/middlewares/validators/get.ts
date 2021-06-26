import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../util/error/index";
import { joi_first_name, joi_last_name, joi_middle_name, joi_username, joi_active, joi_role, joi_user_optional } from '../../../util/joi_schema/joi.user';
import { joi_address, joi_city, joi_coordinates, joi_email, joi_pincode, joi_primary_number, joi_secondary_number, joi_state } from '../../../util/joi_schema/joi.contact_details';
import { UserInterface } from "../../../models/user";
import joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
    // let { name, active, role, contact_details, username } = <UserInterface><unknown>req.query;
    let errors = [];
    let joi_user_validation = joi_user_optional.validate(req.query);
    if(joi_user_validation.error) errors.push(joi_user_validation.error.details)
    // if (name) {
    //     if (name.first) {
    //         let first_name_validation = joi_first_name.validate(name.first);
    //         if (first_name_validation.error) errors.push(first_name_validation.error.details)
    //     }
    //     if (name.middle) {
    //         let middle_name_validation = joi_middle_name.validate(name.middle);
    //         if (middle_name_validation.error) errors.push(middle_name_validation.error.details)
    //     }
    //     if (name.last) {
    //         let last_name_validation = joi_last_name.validate(name.last);
    //         if (last_name_validation.error) errors.push(last_name_validation.error.details)
    //     }
    // }
    // if (username) {
    //     let username_validation = joi_username.validate(username);
    //     if (username_validation.error) errors.push(username_validation.error.details)
    // }
    // if (active) {
    //     let active_validation = joi_active.validate(active);
    //     if (active_validation.error) errors.push(active_validation.error.details)
    // }
    // if (role) {
    //     let role_validation = joi_role.validate(role);
    //     if (role_validation.error) errors.push(role_validation.error.details)
    // }
    // if (contact_details) {
    //     if (contact_details.primary_number) {
    //         let primary_number_validation = joi_primary_number.validate(contact_details.primary_number);
    //         if (primary_number_validation.error) errors.push(primary_number_validation.error.details)
    //     }
    //     if (contact_details.secondary_number) {
    //         let secondary_number_validation = joi_secondary_number.validate(contact_details.secondary_number);
    //         if (secondary_number_validation.error) errors.push(secondary_number_validation.error.details)
    //     }
    //     if (contact_details.email) {
    //         let email_validation = joi_email.validate(contact_details.email);
    //         if (email_validation.error) errors.push(email_validation.error.details)
    //     }
    //     if (contact_details.address) {
    //         let address_validation = joi_address.validate(contact_details.address);
    //         if (address_validation.error) errors.push(address_validation.error.details)
    //     }
    //     if (contact_details.city) {
    //         let city_validation = joi_city.validate(contact_details.city);
    //         if (city_validation.error) errors.push(city_validation.error.details)
    //     }
    //     if (contact_details.state) {
    //         let state_validation = joi_state.validate(contact_details.state);
    //         if (state_validation.error) errors.push(state_validation.error.details)
    //     }
    //     if (contact_details.pincode) {
    //         let pincode_validation = joi_pincode.validate(contact_details.pincode);
    //         if (pincode_validation.error) errors.push(pincode_validation.error.details)
    //     }
    //     if (contact_details.coordinates) {
    //         let coordinates_validation = joi_coordinates.validate(contact_details.coordinates);
    //         if (coordinates_validation.error) errors.push(coordinates_validation.error.details)
    //     }
    // }
    if (errors.length) return next(new BadRequest({ details: errors }))
    return next();

}