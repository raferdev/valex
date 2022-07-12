import { NumberColorFormat } from "@faker-js/faker";
import Repositories from "../repositories/index.js";

async function get(id:number) {
    const payments = await Repositories.payments.findByCardId(id);
    const recharges = await Repositories.recharges.findByCardId(id);

    return {payments,recharges};
}
function calculateAmount(transactions:any) {
    let recharges = 0;
    let payments = 0;

    transactions.payments.forEach((payment:any) => {
        if(payment.amount) {
            payments +=payment.amount
        }
    });
    transactions.recharges.forEach((recharge:any) => {
        if(recharge.amount) {
            recharges +=recharge.amount
        }
    });

    const balance = recharges - payments;

    return balance
}

async function recharge(cardId:number,amount:number) {
    if(amount<=0) {
        throw {type:'invalid',message:'Invalid recharge value.'}
    }
    return await Repositories.recharges.insert({cardId,amount})
}
async function payment(cardId:number,businessId:number, amount:number) {
    return await Repositories.payments.insert({ cardId, businessId, amount } )
}
const transactions = {
    get,
    calculateAmount,
    recharge,
    payment
}
export default transactions;