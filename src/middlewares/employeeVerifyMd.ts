import { NextFunction, Request, Response } from "express";
import Services from "../services/index.js";

async function employeeVerifyMd(req:Request,res:Response,next:NextFunction) {
    const cpf = req.body.cpf;
    const idCompany = res.locals.company.id;
    
    if(!cpf) {
        throw { type:'missing params', message:'Missing CPF'}
    }

    const employee = await Services.auth.employeeVerify(cpf,idCompany);

    if(!employee) {
        throw { type:'missing params',message:'This cpf do not is in your employees database.'}
    }
    
    res.locals.employee = employee;

    next();
};

export default employeeVerifyMd;