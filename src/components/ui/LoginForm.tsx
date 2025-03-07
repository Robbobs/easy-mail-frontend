import { useLoginMutation } from "../../store/api/authApi";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Account } from "../../types/Account";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import Button from "../Button";

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Account>();
  const [login] = useLoginMutation();
  const navigate = useNavigate()
  
  const onSubmit: SubmitHandler<Account> = (account: Account) => {
    login(account);
    navigate("/recipients");
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-5 w-full flex flex-col">
        <InputField label="E-mail" {...register("email", { required: true })} />
        {errors.email && <span>Email is required</span>}
      </div>
      <div className="py-5 w-full flex flex-col">
        <InputField type="password" label="Password" {...register("password", { required: true })} />
        {errors.password && <span>Password is required</span>}
      </div>
      <Button primary rounded outline>
        Login
      </Button>
    </form>
  );
}