import { NextFunction, Request, Response } from "express";
import Services from "../services/index.js";

async function paymentCardCr(req:Request,res:Response,next:NextFunction) {
    const id = res.locals.card.id;
    const typeId = req.body.businessId;
    const amount = req.body.amount;
    
    await Services.transactions.payment(id,typeId,amount);

    res.sendStatus(200);
}

export default paymentCardCr;