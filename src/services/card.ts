import { TransactionTypes } from "../repositories/cardRepository.js";
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import Repositories from "../repositories/index.js";
import Utils from "../utils/index.js";
import Cryptr from "cryptr";

async function create(employee:any,company:any,type:TransactionTypes) {
    const cryptr = new Cryptr(process.env.CRYPT);

    employee.fullName = Utils.ShortName(employee.fullName);

    const cvcNumber = (faker.random.numeric(3)).toString();

    const card = {
    employeeId: employee.id,
    number: faker.random.numeric(16),
    cardholderName: employee.fullName,
    securityCode: cryptr.encrypt(cvcNumber),
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