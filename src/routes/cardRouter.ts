import { Router } from "express";
import activeCardCr from "../controllers/activeCardCr.js";
import blockCardCr from "../controllers/blockCardCr.js";
import createCardCr from "../controllers/createCardCr.js";
import transactionsCardCr from "../controllers/transactionsCardCr.js";
import cardIsActiveMd from "../middlewares/cardIsActiveMd.js";
import companyKeyHandlerMd from "../middlewares/companyKeyHandlerMd.js";
import confirmPasswordCardMd from "../middlewares/confirmPasswordCardMd.js";
import employeeVerifyMd from "../middlewares/employeeVerifyMd.js";
import findCardMd from "../middlewares/findCardMd.js";
import uniqueCardVerifyMd from "../middlewares/uniqueCardVerifyMd.js";

const cardRouter = Router();

cardRouter.post('/card/create', companyKeyHandlerMd, employeeVerifyMd,uniqueCardVerifyMd,createCardCr);
cardRouter.post('/card/activate', findCardMd, cardIsActiveMd, activeCardCr);
cardRouter.get('/card/transactions',findCardMd,transactionsCardCr);
cardRouter.post('/card/block',findCardMd,confirmPasswordCardMd,blockCardCr)

export default cardRouter;