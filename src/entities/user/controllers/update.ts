import { NextFunction, Request, Response } from "express";
import { InternalError } from "../../../util/error/index";
import { UserInterface } from "../models/user";
import updateUser from "../service/updateUser";

export default async (req: Request, res: Response, next: NextFunction) => {
    let filter = { _id: req.body.id }
    let userNewDetails: any = {};
    for (let key in req.body) {
        if (key != "id") userNewDetails[key] = req.body[key]
    }
    let updatedUserResponse = await updateUser(<UserInterface>filter, userNewDetails);
    if (updatedUserResponse.error) {
        return next(new InternalError({ message: updatedUserResponse.error.message, details: [updatedUserResponse.error] }))
    }
    return res.json({
        result: updatedUserResponse.result,
        message: updatedUserResponse.message
    })

}