import { NextFunction, Request, Response } from "express";
import Joi from 'joi';

function rechargeCardSchemaMd(req:Request,res:Response,next:NextFunction) {

 const createCardSchema = Joi.object({
    cardNumber:Joi.string().length(16).required(),
    amount:Joi.number().positive().required()
 });

 const {error} = createCardSchema.validate(req.body,{abortEarly:false});
 if(error) {
    throw error
 }

 next();
}

export default rechargeCardSchemaMd;