import { NextFunction, Response as IResponse } from "express";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import { InternalError } from "../../../util/error/index";
import createUser from "../service/createUser";
import configuration from "../../../config";
import {promises as fsp} from "fs"

export default async (req: any, res: IResponse, next: NextFunction) => {
    try {
        let userData:any = { ...req.body };
        let savePath = `${configuration.user_profile_path}\\${userData.username}.${req.file?.originalname.split('.')[1]}`;
        await fsp.writeFile(savePath, req.file.buffer)
        userData.user_profile = savePath;
        let userCreationResponse: ServiceResponseInterface = await createUser(userData);
        if (userCreationResponse.error) {
            return next( new InternalError({ details: [userCreationResponse.error], message: userCreationResponse.error.message }))
        }
        return res.status(200).json({ message: userCreationResponse.message, result: userCreationResponse.result })
    } catch (e) {
        return next(new InternalError({ details: [e], message: "error saving profile image" }))
    }
}