import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error/index";
import { joi_state_optional } from '../../utils/joi/joi.state';

export default async (req: Request, res: Response, next: NextFunction) => {
    let errors = [];
    let joi_user_validation = joi_state_optional.validate(req.query);
    if (joi_user_validation.error) errors.push(joi_user_validation.error.details)
    if (errors.length) return next(new BadRequest({ details: errors }))
    return next();

}