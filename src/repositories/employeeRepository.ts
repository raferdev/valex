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
    `SELECT e.id,e."fullName",c.type 
    FROM employees e 
    LEFT JOIN cards c ON c."employeeId" = e.id 
    WHERE cpf=$1 AND "companyId" = $2;`,
    [cpf,idCompany]
  );
  
  return result.rows;
}

const employees = {
  findById,
  findByCpf
};

export default employees;