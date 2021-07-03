import { NextFunction, Request, Response } from "express";
import { InternalError } from "../../../util/error/index";
import { CountryInterface } from "../models/country";
import updateCountry from "../services/updateCountry";

export default async (req: Request, res: Response, next: NextFunction) => {
    let filter = { _id: req.body.id }
    let userNewDetails: any = {};
    for (let key in req.body) {
        if (key != "id") userNewDetails[key] = req.body[key]
    }
    let updatedStateResponse = await updateCountry(filter, userNewDetails);
    if (updatedStateResponse.error) {
        return next(new InternalError({ message: updatedStateResponse.error.message, details: [updatedStateResponse.error] }))
    }
    return res.json({
        result: updatedStateResponse.result,
        message: updatedStateResponse.message
    })

}