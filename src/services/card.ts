import { TransactionTypes } from "../repositories/cardRepository.js";
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import Repositories from "../repositories/index.js";
import Utils from "../utils/index.js";
import Cryptr from "cryptr";
import bcrypt from 'bcrypt';

async function create(employee:any,company:any,type:TransactionTypes) {
    const cryptr = new Cryptr(process.env.CRYPT);

    employee.fullName = Utils.ShortName(employee.fullName);

    const cvcNumber = (faker.random.numeric(3)).toString();

    const card = {
    employeeId: employee.id,
    number: faker.random.numeric(16),
    cardholderName: employee.fullName,
    securityCode: cryptr.encrypt(cvcNumber),
    expirationDate: dayjs().add(5, "years").format('MM/YY'),
    password: null,
    isVirtual: false,
    originalCardId: null,
    isBlocked: false,
    type,
    }

    await Repositories.cards.insert(card);
}

async function find(cardNumber:string) {
    const result  = await Repositories.cards.findByNumber(cardNumber);
    return result;
}

function isActive(card:any) {
    if(card.password===null) {
    return false
    }
    return true
}
async function active(pass:any,cardID:number) {
    const hashCost = 10;

    const password = bcrypt.hashSync(pass, hashCost);

   return await Repositories.cards.update(cardID,{password});
}
async function block(card:any) {
    const id = card.id;
    const expiration = card.expirationDate
    const isValid = dayjs().isAfter(expiration, 'month')
    let isBlocked = card.isBlocked

    if(!isValid) {
        throw {type:'expired',message:'this card is expired'}
    }
    if(isBlocked) {
        throw {type:'blocked',message:'this card is blocked'}
    }
    isBlocked = true
    return await Repositories.cards.update(id,{isBlocked})
}
async function unblock(card:any) {
    const id = card.id;
    const expiration = card.expirationDate
    const isValid = dayjs().isAfter(expiration, 'month')
    let isBlocked = card.isBlocked

    if(!isValid) {
        throw {type:'expired',message:'this card is expired'}
    }
    if(!isBlocked) {
        throw {type:'blocked',message:'this card is unblocked'}
    }
    isBlocked = false
    return await Repositories.cards.update(id,{isBlocked})
}


const card = {
    create,
    find,
    isActive,
    active,
    block,
    unblock
};

export default card;