import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../util/error/index";
import joi_user from '../../../util/joi_schema/joi.user';
export default async (req: Request, res: Response, next: NextFunction) => {
    let joi_user_validation = joi_user.validate(req.body);
    if (joi_user_validation.error) return next(new BadRequest({ details: <Array<object>>joi_user_validation.error.details }))
    return next();

}