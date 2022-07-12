import { NextFunction, Request, Response } from "express";
import Services from "../services/index.js";

async function transactionsCardCr(req:Request,res:Response,next:NextFunction) {
    const {id} = res.locals.card;
    const transactions = await Services.transactions.get(id);
    const balance = Services.transactions.calculateAmount(transactions);

    const result = {
        balance,
        transactions:transactions.payments,
        recharges:transactions.recharges
    }
    res.send(result).status(200);
}

export default transactionsCardCr;