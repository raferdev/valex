import { NextFunction, Request, Response, } from "express"
import Services from "../services/index.js";

function cardIsActiveMd(req:Request,res:Response,next:NextFunction) {

    const cardData = res.locals.card;

    const isActive =  Services.card.isActive(cardData);

    if(isActive) {
        throw { type:'card active',message:'card is active'}
    }

    next();
}

export default cardIsActiveMd;