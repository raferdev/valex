import { Router } from "express";
import companyKeyHandlerMd from "../middlewares/companyKeyHandlerMd.js";

const cardRouter = Router();

cardRouter.get('/create', companyKeyHandlerMd);

export default cardRouter;