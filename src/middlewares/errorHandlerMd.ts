import { NextFunction, Request, Response } from "express";

function errorHandlerMd(error:any,req:Request,res:Response,next:NextFunction) {
    console.log(error);
    if(error.type==='auth error') {
       return res.status(501).send(error.message);
    }
    return res.status(500).send(error.message);
}

export default errorHandlerMd;