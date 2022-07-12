import { Request, Response } from "express";
import Services from "../services/index.js";

async function rechargeCardCr(req:Request,res:Response) {
    const id = res.locals.card.id;
    const amount = req.body.amount;
    await Services.transactions.recharge(id,amount);

    res.sendStatus(200);
}

export default rechargeCardCr;