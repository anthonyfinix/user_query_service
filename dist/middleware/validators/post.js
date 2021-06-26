"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../util/error/index");
const joi_user_1 = require("../../util/joi_schema/joi.user");
exports.default = async (req, res, next) => {
    let { name, username, active, role } = req.query;
    let errors = [];
    if (name) {
        let name_validation = joi_user_1.joi_name.validate(name);
        if (name_validation.error)
            errors.push(name_validation.error.details);
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
    if (errors.length)
        next(new index_1.BadRequest({ details: errors }));
    return next();
};
