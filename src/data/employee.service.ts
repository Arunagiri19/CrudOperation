import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const FetchAllEmployees = async () => {
    const employees = await axios.get(`${apiUrl}/users`);
    return employees.data;
}



export const DeleteEmployee = async (employeeId: number) => {
    const employees = await axios.delete(`${apiUrl}/${employeeId}`);
    return employees.data;
}