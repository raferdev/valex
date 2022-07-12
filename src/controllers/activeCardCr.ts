import { Request, Response } from "express";
import Services from "../services/index.js";

async function activeCardCr(req:Request,res:Response) {
    const password = req.body.password;
    const id = res.locals.card.id;

    await Services.card.active(password,id);

    res.sendStatus(200);
}

export default activeCardCr;