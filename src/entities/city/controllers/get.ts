import { Request, Response as IResponse, NextFunction } from 'express';
import getCity from '../services/getCity';
import { CityInterface } from '../models/city';
import { InternalError } from '../../../util/error/index';

export default async (req: Request, res: IResponse, next: NextFunction) => {
    let response = await getCity(<CityInterface><unknown>req.query);
    if (response.error) return next(new InternalError({ message: response.error.message, details: [response.error] }));
    return res.json({ result: response.result, message: response.message })
}