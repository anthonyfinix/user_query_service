import { Request, Response as IResponse, NextFunction } from 'express';
import getUser from '../../service/getUser';
import { UserInterface } from '../../models/user';
import { Response, IResponseParameters } from '../../util/response';
import { InternalError } from '../../util/error';

export default async (req: Request, res: IResponse, next: NextFunction) => {
    let response = await getUser(<UserInterface><Object>req.query);
    let error: Error = <Error>response.error;
    if (response.error) return next(new InternalError({ message: error.message }));
    return res.json(new Response(<IResponseParameters>{ message: response.message, result: response.result }).getObjectResponse())
}