import { Response, Request, ErrorRequestHandler, NextFunction } from "express";
import { GeneralError } from "../util/error/index";
export default (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof GeneralError) return res.status(err.status).json({ error: err.message, details: err.details })
    res.status(400).json({ error: err });
}