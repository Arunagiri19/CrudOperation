import { useForm } from "react-hook-form";
import type { Employee } from "../models/employee.model";
import { Button, TextField } from "@mui/material";


const CreateUpdateEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    defaultValues: {
      name: "",
      email: "",
      website: "",
    },
  });

  const onSubmit = (data: Employee) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <>
      <section className="w-full h-full">
        <form
          className="flex flex-col gap-4 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-2xl font-bold text-center">Create/Update Employee</span>
          <div className="flex flex-col gap-5  justify-center items-center">
            <TextField
              label="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message},</span>
            )}

            <TextField
              label="email"
              {...register("email", {
                required: "email is required",
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <TextField
              label="website"
              {...register("website", { required: "Location is required" })}
            />
            {errors.website && (
              <span className="text-red-500">{errors.website.message}</span>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4"
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateUpdateEmployee;

// const CreateUpdateEmployee = () => {
//   return (
//     <>
//       <section className="h-full w-full ">
//         <form className="flex flex-col gap-5 p-3  justify-center items-center">
//           <span className="text-purple-400 f" >Create/Update Employees</span>
//           <TextField label="Name" />
//           <TextField label="Email"/>
//           <TextField label="Website"/>
//         </form>
//       </section>
//     </>
//   );
// };

// export default CreateUpdateEmployee;
