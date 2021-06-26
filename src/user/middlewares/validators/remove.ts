import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../util/error/index";
import { joi_name, joi_username, joi_active, joi_role } from '../../../util/joi_schema/joi.user';
export default async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.query;
    if (!id) return next(new BadRequest({ message: "  " }))
    return next();

}