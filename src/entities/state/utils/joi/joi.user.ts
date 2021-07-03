import joi from 'joi';
import joi_contact_details, { joi_contact_details_optional } from '../../../contact_details/utils/joi/joi.contact_details';
const joi_id = joi.string();
const joi_first_name = joi.string()
const joi_middle_name = joi.string()
const joi_last_name = joi.string()
const joi_name = joi.object({
    first_name: joi_first_name.required(),
    middle_name: joi_middle_name,
    last_name: joi_last_name.required(),
});
const joi_password = joi.string();
const joi_username = joi.string();
const joi_active = joi.boolean();
const joi_role = joi.string();
const joi_user_optional = joi.object({
    id:joi_id.optional(),
    name: joi_name.optional(),
    username: joi_username.optional(),
    password: joi_password.optional(),
    contact_details: joi_contact_details_optional.optional(),
    active: joi_active.optional(),
    role: joi_role.optional(),
})
const joi_user = joi.object({
    name: joi_name.required(),
    username: joi_username.required(),
    password: joi_password.required(),
    contact_details: joi_contact_details.required(),
    active: joi_active.required(),
    role: joi_role.required(),
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
    joi_name,
    joi_user_optional
}
export default joi_user;