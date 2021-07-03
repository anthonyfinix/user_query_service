import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error/index";
import { joi_id } from '../../utils/joi/joi.user';
export default async (req: Request, res: Response, next: NextFunction) => {
    let { id } = req.query;
    if (!id) return next(new BadRequest({ message: "id is required" }))
    let joi_id_validate = joi_id.validate(id);
    if (joi_id_validate.error) return next(new BadRequest({ message: "there was an error with id ", details: <Array<object>>joi_id_validate.error.details }))
    return next();

}