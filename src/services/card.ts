import { TransactionTypes } from "../repositories/cardRepository.js";
import { faker, StringColorFormat } from '@faker-js/faker';
import dayjs from 'dayjs';
import Repositories from "../repositories/index.js";

async function create(employee:any,company:any,type:TransactionTypes) {
    let shortCardName = '';
    const employeeNameArr = employee.fullName.split(' ');
    employeeNameArr.forEach( (name:string, index:number)  => {
        if(index === 0) {
           return shortCardName += name
        }
        if(index === employeeNameArr.length-1) {
           return shortCardName += ` ${name}`
        }
        if(name.length >= 3) {
           return shortCardName += ` ${name[0].toLocaleUpperCase()}`;
        }
    })
    const card = {
    employeeId: employee.id,
    number: faker.random.numeric(16),
    cardholderName: shortCardName,
    securityCode: faker.random.numeric(3),
    expirationDate: dayjs().format('MM/YY'),
    password: null,
    isVirtual: false,
    originalCardId: null,
    isBlocked: false,
    type,
    }
    await Repositories.cards.insert(card);
}

const card = {
    create,
};

export default card;