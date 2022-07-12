import { NextFunction, Request, Response } from "express";
import Services from "../services/index.js";

async function confirmTypeTransaction(req:Request, res:Response,next:NextFunction) {
    const cardType = res.locals.card.type;
    const businessId = req.body.businessId;
    const businessType =  await Services.transactions.businessType(businessId);
    if(businessType!==cardType) {
        throw {type:'invalid',message:'Business type is not the same.'}
    }
    
    next();
}
export default confirmTypeTransaction;