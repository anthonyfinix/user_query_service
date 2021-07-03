import joi from "joi";
const joi_name = joi.string();
const joi_country_optional = joi.object({
    name: joi_name,
})
const joi_country = joi.object({
    name: joi_name.required(),
})

export {
    joi_name,
    joi_country_optional
}

export default joi_country