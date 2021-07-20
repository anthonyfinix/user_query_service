import joi from 'joi';
const joi_id = joi.string();
const joi_first_name = joi.string()
const joi_middle_name = joi.string()
const joi_last_name = joi.string()

const joi_primary_number = joi.number();
const joi_secondary_number = joi.number();
const joi_email = joi.string().email();
const joi_city = joi.string();
const joi_address = joi.string();
const joi_state = joi.string();
const joi_country = joi.string();
const joi_pincode = joi.number();
const joi_coordinates = joi.array().items(joi.number());
const joi_password = joi.string();
const joi_username = joi.string();
const joi_active = joi.boolean();
const joi_role = joi.string();
const joi_user_optional = joi.object({
    id: joi_id.optional(),
    first_name:joi_first_name,
    middle_name:joi_first_name,
    last_name:joi_first_name,
    username: joi_username,
    password: joi_password,
    active: joi_active,
    role: joi_role,
    primary_number: joi_primary_number,
    secondary_number: joi_secondary_number,
    email: joi_email,
    address: joi_address,
    city: joi_city,
    country: joi_country,
    state: joi_state,
    // pincode: joi_pincode.required(),
    coordinates: joi_coordinates.optional(),
})
const joi_user = joi.object({
    first_name:joi_first_name.required(),
    middle_name:joi_first_name,
    last_name:joi_first_name.required(),
    username: joi_username.required(),
    password: joi_password.required(),
    active: joi_active.required(),
    role: joi_role.required(),
    primary_number: joi_primary_number.required(),
    secondary_number: joi_secondary_number.required(),
    email: joi_email.required(),
    address: joi_address.required(),
    city: joi_city.required(),
    country: joi_country.required(),
    state: joi_state.required(),
    // pincode: joi_pincode.required(),
    coordinates: joi_coordinates,
});

export {
    joi_id,
    joi_first_name,
    joi_middle_name,
    joi_last_name,
    joi_password,
    joi_username,
    joi_active,
    joi_role,
    joi_primary_number,
    joi_secondary_number,
    joi_email,
    joi_city,
    joi_address,
    joi_state,
    joi_country,
    joi_pincode,
    joi_coordinates,
    joi_user_optional
}
export default joi_user;