import { Request, Response } from "express";
import Services from "../services/index.js";

async function blockCardCr(req:Request,res:Response) {
    const card = res.locals.card;
    await Services.card.block(card);

    res.sendStatus(200);
}
export default blockCardCr;