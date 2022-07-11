import { connection } from "../database/database.js";

export interface Employee {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  companyId: number;
}

export async function findById(id: number) {
  const result = await connection.query<Employee, [number]>(
    "SELECT * FROM employees WHERE id=$1",
    [id]
  );

  return result.rows[0];
}

export async function findByCpf(cpf: string, idCompany: number) {
  const result = await connection.query<Employee, [string, number]>(
    `SELECT * FROM employees WHERE cpf=$1 AND "companyId" = $2;`,
    [cpf,idCompany]
  );
  
  return result.rows[0];
}

const employees = {
  findById,
  findByCpf
};

export default employees;