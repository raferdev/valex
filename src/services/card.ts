import { TransactionTypes } from "../repositories/cardRepository.js";
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import Repositories from "../repositories/index.js";

async function create(employee:any,company:any,type:TransactionTypes) {
    const card = {
    employeeId: employee.id,
    number: faker.random.numeric(16),
    cardholderName: employee.fullName,
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