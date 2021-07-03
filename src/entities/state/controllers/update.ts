import { NextFunction, Request, Response } from "express";
import { InternalError } from "../../../util/error/index";
import { StateInterface } from "../models/state";
import updateUser from "../service/updateState";

export default async (req: Request, res: Response, next: NextFunction) => {
    let filter = { _id: req.body.id }
    let userNewDetails: any = {};
    for (let key in req.body) {
        if (key != "id") userNewDetails[key] = req.body[key]
    }
    let updatedStateResponse = await updateUser(filter, userNewDetails);
    if (updatedStateResponse.error) {
        return next(new InternalError({ message: updatedStateResponse.error.message, details: [updatedStateResponse.error] }))
    }
    return res.json({
        result: updatedStateResponse.result,
        message: updatedStateResponse.message
    })

}