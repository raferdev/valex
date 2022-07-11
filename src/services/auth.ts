import Repositories from "../repositories/index.js";

async function validateKey(key:string) {
   const company = await Repositories.company.findByApiKey(key);
   if(!company) {
    throw {
        type:"auth error", message:"key dont found"
    }
   }
   return company;
};
async function employeeVerify(cpf:string,idCompany:number) {
    return await Repositories.employees.findByCpf(cpf,idCompany);
}

const auth = {
    validateKey,
    employeeVerify
};

export default auth;