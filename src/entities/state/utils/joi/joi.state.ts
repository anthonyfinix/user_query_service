import joi from "joi";
const joi_name = joi.string();
const joi_state_optional = joi.object({
    name: joi_name,
})
const joi_state = joi.object({
    name: joi_name.required(),
})
export const joi_id = joi.string();
export {
    joi_name,
    joi_state_optional
}

export default joi_state