import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../InputField";
import Button from "../Button";

interface Inputs {
  name: string,                                                     
  surname: string,
  email: string | number,
  password: string | number,
};

export default function 
RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-6 py-5">
        <div className="w-full flex flex-col">
          <InputField label="Name" {...register("name", { required: true })} />
          {errors.name && <span>Name is required</span>}
        </div>
        <div className="w-full flex flex-col">
          <InputField label="Last Name" {...register("surname", { required: true })} />
          {errors.surname && <span>Surname is required</span>}
        </div>
      </div>
      <div className="py-5 w-full flex flex-col">
        <InputField label="E-mail" {...register("email", { required: true })} />
        {errors.email && <span>Email is required</span>}
      </div>
      <div className="flex flex-row gap-6 py-5">
        <div className="w-full flex flex-col">
          <InputField type="password" label="Password" {...register("password", { required: true })} />
          {errors.password && <span>Password is required</span>}
        </div>
        <div className="w-full flex flex-col">
          <InputField type="password" label="Confirm Password" {...register("password", { required: true })} />
          {errors.password && <span>Password confirmation is required</span>}
        </div>
      </div>
      <Button success rounded outline>
        Submit
      </Button>
    </form>
  );
}