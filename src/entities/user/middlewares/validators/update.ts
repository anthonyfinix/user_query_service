import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error/index";
import { joi_id, joi_name, joi_username, joi_active, joi_role } from '../../utils/joi/joi.user';
export default async (req: Request, res: Response, next: NextFunction) => {
    let { id, name, username, active, role } = req.query;
    let errors = [];
    let id_validation = joi_id.validate(id);
    if (id_validation.error) errors.push(id_validation.error.details)
    if (name) {
        let name_validation = joi_name.validate(name);
        if (name_validation.error) errors.push(name_validation.error.details)
    }
    if (username) {
        let username_validation = joi_username.validate(username);
        if (username_validation.error) errors.push(username_validation.error.details)
    }
    if (active) {
        let active_validation = joi_active.validate(active);
        if (active_validation.error) errors.push(active_validation.error.details)
    }
    if (role) {
        let role_validation = joi_role.validate(role);
        if (role_validation.error) errors.push(role_validation.error.details)
    }
    if (errors.length) return next(new BadRequest({ details: errors }))
    return next();

}