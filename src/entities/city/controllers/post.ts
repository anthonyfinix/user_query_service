import { NextFunction, Request, Response as IResponse } from "express";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import { InternalError } from "../../../util/error/index";
import createCity from "../services/createCity";

export default async (req: Request, res: IResponse, next: NextFunction) => {
    let response: ServiceResponseInterface = await createCity(req.body);
    if (response.error) {
        return next(new InternalError({ details: [response.error], message: response.error.message }))
    }
    return res.status(200).json({ message: response.message, result: response.result })
}