import { NextFunction, Request, Response as IResponse } from "express";
import { ServiceResponseInterface } from "../../../models/serviceResponse.interface";
import createUser from "../service/createUser";

export default async (req: Request, res: IResponse, next: NextFunction) => {
    let userCreationResponse: ServiceResponseInterface = await createUser(req.body);
    if (userCreationResponse.error) return res.status(500).json({ error: userCreationResponse.error.message, details: userCreationResponse.error })
    return res.status(200).json({ message: userCreationResponse.message, result: userCreationResponse.result })
}