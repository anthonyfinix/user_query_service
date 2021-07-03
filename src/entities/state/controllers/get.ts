import { Request, Response as IResponse, NextFunction } from 'express';
import getUser from '../service/getState';
import { StateInterface } from '../models/state';
import { InternalError } from '../../../util/error/index';

export default async (req: Request, res: IResponse, next: NextFunction) => {
    let response = await getUser(<StateInterface><unknown>req.query);
    if (response.error) return next(new InternalError({ message: response.error.message, details: [response.error] }));
    return res.json({ result: response.result, message: response.message })
}