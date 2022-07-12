import { NextFunction, Request, Response } from "express";
import Services from "../services/index.js";

async function findCardMd(req:Request,res:Response,next:NextFunction) {
    const cardNumber = req.body.cardNumber;

    const card = await Services.card.find(cardNumber);
    if(!card) {
       throw { type:'not found', message:'Card do not found.'} 
    }
    res.locals.card = card;
    
    next();
}

export default findCardMd;