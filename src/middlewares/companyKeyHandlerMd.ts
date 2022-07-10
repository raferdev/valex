import { NextFunction, Request, Response } from "express";
import validateKey from "../services/authSv.js";


async function companyKeyHandlerMd(req:Request,res:Response,next:NextFunction) {
    const key:any = req.headers['x-api-key'];
    const company = await validateKey(key);
    res.locals.company = company

    next();
};

export default companyKeyHandlerMd;