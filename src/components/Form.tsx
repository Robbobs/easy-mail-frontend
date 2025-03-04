import { useForm, SubmitHandler } from "react-hook-form";

interface InputsProps {
  name: string, 
  surname: string,
  email: string | number,
  password: string | number,
};

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("name"))

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="" {...register("name", { required: true })} />
      {errors.name && <span>Name is required</span>}
      <input defaultValue="" {...register("surname", { required: true })} />
      {errors.surname && <span>Surname is required</span>}
      <input defaultValue="example@example.com" {...register("email", { required: true })} />
      {errors.email && <span>Email is required</span>}
      <input defaultValue="" {...register("password", { required: true })} />
      {errors.password && <span>Password is required</span>}
      <input type="submit" />
    </form>
  );
}