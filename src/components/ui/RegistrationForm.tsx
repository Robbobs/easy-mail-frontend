import { useCreateAccountMutation } from "../../store/api/accountApi";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Account } from "../../types/Account";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import Button from "../Button";

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Account>();
  const [createAccount] = useCreateAccountMutation();
  const navigate = useNavigate();
  
  const onSubmit: SubmitHandler<Account> = async (account: Account) => {
    try{
      await createAccount(account).unwrap();
      navigate("/signIn");
    } catch (err){
      console.log(err);
    }
  };
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(-1);
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-6 py-5">
        <div className="w-full flex flex-col">
          <InputField label="Name" {...register("first_name", { required: true })} />
          {errors.first_name && <span>Name is required</span>}
        </div>
        <div className="w-full flex flex-col">
          <InputField label="Last Name" {...register("last_name", { required: true })} />
          {errors.last_name && <span>Last name is required</span>}
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
      <div className="flex gap-2">
        <Button className="w-full" success rounded outline>
          Submit
        </Button>
        <Button onClick={e => handleClick(e)} className="w-full" primary rounded>
          Back
        </Button>
      </div>
    </form>
  );
}