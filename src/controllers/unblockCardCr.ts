import { Request, Response } from "express";
import Services from "../services/index.js";

async function unblockCardCr(req:Request,res:Response) {
    const card = res.locals.card;
    await Services.card.unblock(card);

    res.sendStatus(200);
}
export default unblockCardCr;