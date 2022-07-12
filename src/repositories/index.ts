import company from "./companyRepository.js";
import employees from "./employeeRepository.js";
import cards from "./cardRepository.js";
import payments from "./paymentRepository.js"
import recharges from "./rechargeRepository.js"

const Repositories = {
    company,
    employees,
    cards,
    payments,
    recharges
}

export default Repositories;