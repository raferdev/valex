import { NextFunction, Request, Response } from "express";
import Joi from 'joi';

function paymentCardSchemaMd(req:Request,res:Response,next:NextFunction) {

 const createCardSchema = Joi.object({
    cardNumber:Joi.string().length(16).required(),
    password:Joi.string().length(4).required(),
    businessId:Joi.number().integer().positive().required(),
    amount:Joi.number().positive().allow(0).required()
 });

 const {error} = createCardSchema.validate(req.body,{abortEarly:false});
 if(error) {
    throw error
 }

 next();
}

export default paymentCardSchemaMd;