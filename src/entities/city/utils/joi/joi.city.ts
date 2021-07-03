import joi from "joi";
const joi_primary_number = joi.number();
const joi_secondary_number = joi.number();
const joi_email = joi.string().email();
const joi_city = joi.string();
const joi_address = joi.string();
const joi_state = joi.string();
const joi_country = joi.string();
const joi_pincode = joi.number();
const joi_coordinates = joi.array().items(joi.number());
const joi_contact_details_optional = joi.object({
    primary_number: joi_primary_number,
    secondary_number: joi_secondary_number,
    email: joi_email,
    address: joi_address,
})
const joi_contact_details = joi.object({
    primary_number: joi_primary_number.required(),
    secondary_number: joi_secondary_number.required(),
    email: joi_email.required(),
    address: joi_address.required(),
    // city: joi_city.required(),
    // country: joi_country.required(),
    // state: joi_state.required(),
    // pincode: joi_pincode.required(),
    // coordinates: joi_coordinates,
})

export {
    joi_primary_number,
    joi_secondary_number,
    joi_email,
    joi_address,
    joi_city,
    joi_state,
    joi_pincode,
    joi_coordinates,
    joi_contact_details_optional
}

export default joi_contact_details