import { Request, Response } from "express";
import { TransactionTypes } from "../repositories/cardRepository.js";
import Services from "../services/index.js";

async function createCardCr(req:Request,res:Response) {
    const type:TransactionTypes = req.body.type;
    const company = res.locals.company;
    const employee = res.locals.employee;
    await Services.card.create(employee,company,type);
    res.send('Add card sucessfully,').status(200);

}

export default createCardCr;