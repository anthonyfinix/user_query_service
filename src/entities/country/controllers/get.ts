import { Request, Response as IResponse, NextFunction } from 'express';
import getCountry from '../services/getCountry';
import { CountryInterface } from '../models/country';
import { InternalError } from '../../../util/error/index';

export default async (req: Request, res: IResponse, next: NextFunction) => {
    let response = await getCountry(<CountryInterface><unknown>req.query);
    if (response.error) return next(new InternalError({ message: response.error.message, details: [response.error] }));
    return res.json({ result: response.result, message: response.message })
}