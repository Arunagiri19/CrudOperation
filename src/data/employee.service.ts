import axios from "axios";
import type { Employee } from "../models/employee.model";

const apiUrl = "https://jsonplaceholder.typicode.com";

export const FetchAllEmployees = async () => {
  const employees = await axios.get(`${apiUrl}/users`);
  return employees.data;
};

export const DeleteEmployee = async (employeeId: number) => {
  const response = await axios.delete(`${apiUrl}/users/${employeeId}`);
  return response.data;
};

export const UpdateEmployee = async (employee: Employee) => {
  const res = await axios.put(`${apiUrl}/users/${employee.id}`, employee);
  return res.data;
};
