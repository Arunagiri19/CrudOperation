import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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

  if (isLoading) return <CircularProgress />;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <Button variant="outlined" onClick={onCreate}>
        Create
      </Button>
      <TableContainer component={Paper}>
        <Table >
          <TableHead >
            <TableRow >
              <TableCell >
                <strong>Id</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>email</strong>
              </TableCell>
              <TableCell>
                <strong>Website</strong>
              </TableCell>
              <TableCell>
                <strong>View</strong>
              </TableCell>
              <TableCell>
                <strong>Update</strong>
              </TableCell>
              <TableCell>
                <strong>Delete</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((employee: Employee, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.website}</TableCell>
                    <TableCell>
                      <Button className="bg-red-500 text-black font-light"
                        type="button"
                        variant="outlined"
                        onClick={() => viewEmployee(employee)}
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button className="bg-green-500 text-black font-light"
                        type="button"
                        variant="outlined"
                        onClick={() => updateEmployee(employee)}
                      >
                        Update
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button className="bg-blue-500 text-black font-light"
                        type="button"
                        variant="outlined"
                        onClick={() => deleteEmployee(employee.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeGrid;


