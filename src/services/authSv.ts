import database from "../repositories/index.js";

async function validateKey(key:string) {
   const company = await database.company.findByApiKey(key);
   if(!company) {
    throw {
        type:"auth error", message:"key dont found"
    }
   }
   return company;
};

export default validateKey;