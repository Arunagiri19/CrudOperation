import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { Employee } from "../models/employee.model";
import { Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import type { MainState } from "../appStore/store";
import { useNavigate } from "react-router-dom";

const CreateUpdateEmployee = () => {
  const selectedEmployee = useSelector((state: MainState) => state.employeeState);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Employee>({
    defaultValues: {
      name: "",
      email: "",
      website: "",
    },
  });

  useEffect(() => {
    if (selectedEmployee) {
      reset(selectedEmployee);
    }
  }, [selectedEmployee, reset]);

  const onSubmit =  () => {
      navigate("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <form
        className="bg-yellow-50 shadow-md rounded-lg p-8 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          {selectedEmployee?.id ? "Update Employee" : "Create Employee"}
        </h2>

        <div className="flex flex-col gap-4">
          <div>
            <TextField
              fullWidth
              label="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <TextField
              fullWidth
              label="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <TextField
              fullWidth
              label="Website"
              {...register("website", { required: "Website is required" })}
            />
            {errors.website && (
              <p className="text-sm text-red-500 mt-1">{errors.website.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CreateUpdateEmployee;
