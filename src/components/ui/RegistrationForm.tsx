import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";

interface Inputs {
  name: string,                                                     
  surname: string,
  email: string | number,
  password: string | number,
};

export default function RegistrationForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-6 py-5">
        <Input label="name" {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}
        <Input label="last name" {...register("surname", { required: true })} />
        {errors.surname && <span>Surname is required</span>}
      </div>

      <div className="flex flex-row gap-6 py-5">
        <Input label="email" {...register("email", { required: true })} />
        {errors.email && <span>Email is required</span>}
        <Input label="password" {...register("password", { required: true })} />
        {errors.password && <span>Password is required</span>}
      </div>
      <Button success rounded outline>
        Submit
      </Button>
    </form>
  );
}