import { Router } from "express";
import activeCardCr from "../controllers/activeCardCr.js";
import blockCardCr from "../controllers/blockCardCr.js";
import createCardCr from "../controllers/createCardCr.js";
import paymentCardCr from "../controllers/paymentCardCr.js";
import rechargeCardCr from "../controllers/rechargeCardCr.js";
import transactionsCardCr from "../controllers/transactionsCardCr.js";
import unblockCardCr from "../controllers/unblockCardCr.js";
import cardIsActiveMd from "../middlewares/cardIsActiveMd.js";
import companyKeyHandlerMd from "../middlewares/companyKeyHandlerMd.js";
import confirmPasswordCardMd from "../middlewares/confirmPasswordCardMd.js";
import confirmTypeTransaction from "../middlewares/confirmTypeTransactionMd.js";
import employeeVerifyMd from "../middlewares/employeeVerifyMd.js";
import findCardMd from "../middlewares/findCardMd.js";
import isBlockOrExpiredCardMd from "../middlewares/isBlockOrExpiredCardMd.js";
import activeCardSchemaMd from "../middlewares/schemas/activeCardSchemaMd.js";
import createCardSchemaMd from "../middlewares/schemas/createCardSchemaMd.js";
import paymentCardSchemaMd from "../middlewares/schemas/paymentCardSchemaMd.js";
import rechargeCardSchemaMd from "../middlewares/schemas/rechargeCardSchemaMd.js";
import uniqueCardVerifyMd from "../middlewares/uniqueCardVerifyMd.js";

const cardRouter = Router();

cardRouter.post('/card/create', createCardSchemaMd,companyKeyHandlerMd, employeeVerifyMd,uniqueCardVerifyMd,createCardCr);
cardRouter.post('/card/activate',activeCardSchemaMd, findCardMd, cardIsActiveMd, activeCardCr);
cardRouter.post('/card/block',activeCardSchemaMd,findCardMd,confirmPasswordCardMd,blockCardCr);
cardRouter.post('/card/unblock',activeCardSchemaMd,findCardMd,companyKeyHandlerMd,unblockCardCr);
cardRouter.post('/card/transactions/recharge',rechargeCardSchemaMd,companyKeyHandlerMd,findCardMd,isBlockOrExpiredCardMd,rechargeCardCr);
cardRouter.post('/card/transactions/payment',paymentCardSchemaMd,findCardMd,isBlockOrExpiredCardMd,confirmPasswordCardMd,confirmTypeTransaction,paymentCardCr);

cardRouter.get('/card/transactions',findCardMd,transactionsCardCr);

export default cardRouter;