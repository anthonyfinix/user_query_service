import { Request, Response as IResponse, NextFunction } from 'express';
import getUser from '../service/getUser';
import { UserInterface } from '../models/user';
import { InternalError } from '../../../util/error';

export default async (req: Request, res: IResponse, next: NextFunction) => {
    let response = await getUser(<UserInterface><unknown>req.query);
    if (response.error) return next(new InternalError({ message: response.error.message, details: [response.error] }));
    return res.json({ result: response.result, message: response.message })
}