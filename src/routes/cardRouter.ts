import { Router } from "express";
import createCardCr from "../controllers/createCardCr.js";
import companyKeyHandlerMd from "../middlewares/companyKeyHandlerMd.js";
import employeeVerifyMd from "../middlewares/employeeVerifyMd.js";

const cardRouter = Router();

cardRouter.get('/create', companyKeyHandlerMd, employeeVerifyMd,createCardCr);

export default cardRouter;