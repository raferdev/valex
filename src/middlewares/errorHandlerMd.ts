import { NextFunction, Request, Response } from "express";

function errorHandlerMd(error:any,req:Request,res:Response,next:NextFunction) {
    console.log(error);
    if(error.type==='auth error') {
       return res.send(error.message).status(501);
    }
    return res.send(error.message).status(501);
}

export default errorHandlerMd;