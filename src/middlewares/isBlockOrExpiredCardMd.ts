import dayjs from "dayjs";
import { NextFunction, Request, Response } from "express";

function isBlockOrExpiredCardMd(req:Request,res:Response,next:NextFunction) {
    const card = res.locals.card;
    const expiration = card.expirationDate
    const isValid = dayjs().isAfter(expiration, 'month')
    let isBlocked = card.isBlocked

    if(card.password===null) {
        throw {type:'inactive',message:'This card is inactive.'}
    }
    if(!isValid) {
        throw {type:'expired',message:'this card is expired'}
    }
    if(isBlocked) {
        throw {type:'blocked',message:'this card is blocked'}
    }
    next();
}

export default isBlockOrExpiredCardMd;