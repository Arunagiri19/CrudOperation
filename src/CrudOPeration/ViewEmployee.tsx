import { useSelector } from "react-redux";
import type { MainState } from "../appStore/store";

const ViewEmployee = () => {
  const employee = useSelector((state: MainState) => state.employeeState);

  return (
    <section className="h-full flex items-center justify-center bg-yellow-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Employee Details</h2>
        <div className="text-left space-y-3 text-gray-800">
          <p>
            <span className="font-semibold">ID:</span> {employee.id}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {employee.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {employee.email}
          </p>
          <p>
            <span className="font-semibold">Website:</span> {employee.website}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ViewEmployee;
