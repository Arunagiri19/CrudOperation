import { useSelector } from "react-redux";
import type { MainState } from "../appStore/store";

const ViewEmployee = () => {
  const employee = useSelector((state: MainState) => state.employeeState);

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <span className="font-bold">Employee Details</span>
        <span>ID: {employee.id}</span>
        <span>Name: {employee.name}</span>
        <span>Email: {employee.email}</span>
        <span>Website: {employee.website}</span>
      </div>
    </>
  );
};

export default ViewEmployee;
