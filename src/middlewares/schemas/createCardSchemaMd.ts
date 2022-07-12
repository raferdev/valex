import { NextFunction, Request, Response } from "express";
import Joi from 'joi';

function createCardSchemaMd(req:Request,res:Response,next:NextFunction) {

 const createCardSchema = Joi.object({
    cpf:Joi.string().length(11).required(),
    type:Joi.string().valid("groceries","restaurants","transport","education","health").required()
 });

 const {error} = createCardSchema.validate(req.body,{abortEarly:false});
 if(error) {
    throw error
 }

 next();
}

export default createCardSchemaMd;