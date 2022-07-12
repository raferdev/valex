import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

function confirmPasswordCardMd(req:Request,res:Response,next:NextFunction) {
    const passwordDb = res.locals.card.password;
    const passwordBody = req.body.password;
    
    const isPasswordValid = bcrypt.compareSync(passwordBody, passwordDb);
    if (!isPasswordValid) {
      throw {type:'unauthorized',message:'Wrong pass, more 3 temps.'}
    }

    next();
}

export default confirmPasswordCardMd;