import {
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import type { Employee } from "../models/employee.model";
import { DeleteEmployee, FetchAllEmployees } from "../data/employee.service";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../appStore/store";
import { saveEmployeeData } from "../features/employeeSlice";
import { useNavigate } from "react-router-dom";

const EmployeeGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: FetchAllEmployees,
  });

  const onCreate = () => {
    dispatch(
      saveEmployeeData({
        id: 0,
        name: "",
        email: "",
        website: "",
      })
    );
    navigate("/create");
  };

  const viewEmployee = (employee: Employee) => {
    dispatch(saveEmployeeData(employee));
    navigate("/view");
  };

  const updateEmployee = (employee: Employee) => {
    dispatch(saveEmployeeData(employee));
    navigate("/update");
  };

  const deleteEmployee = async (employeeId: number) => {
    await DeleteEmployee(employeeId);
  };

  if (isLoading) return <div className="flex justify-center mt-10"><CircularProgress /></div>;

  if (isError) return <p className="text-red-600 text-center mt-4">Error: {error.message}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Employee List</h2>
        <button
          onClick={onCreate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          + Create
        </button>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {["Id", "Name", "Email", "Website", "View", "Update", "Delete"].map((col) => (
                <th key={col} className="px-4 py-2 text-left text-gray-700 font-semibold border-b border-gray-200">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((employee, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-4 py-2 border-b">{employee.id}</td>
                <td className="px-4 py-2 border-b">{employee.name}</td>
                <td className="px-4 py-2 border-b">{employee.email}</td>
                <td className="px-4 py-2 border-b">{employee.website}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => viewEmployee(employee)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => updateEmployee(employee)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Update
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeGrid;
