import { NextFunction, Request, Response } from "express";

async function uniqueCardVerifyMd(req:Request,res:Response,next:NextFunction) {
    const type = req.body.type;
    
    res.locals.employee.forEach((row:any) => {
        if(row.type === type) {
            throw { type:'duplicate', message:'card type does exist'}
        }
    });
    res.locals.employee = res.locals.employee[0];
    next();
}

export default uniqueCardVerifyMd;