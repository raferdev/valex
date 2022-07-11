import { NextFunction, Request, Response } from "express";
import Services from "../services/index.js";

async function companyKeyHandlerMd(req:Request,res:Response,next:NextFunction) {
    const key:any = req.headers['x-api-key'];
    const company = await Services.auth.validateKey(key);
    res.locals.company = company
    
    next();
};

export default companyKeyHandlerMd;