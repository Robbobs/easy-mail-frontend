import { useCreateAccountMutation } from "../../store/api/accountApi";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../InputField";
import Button from "../Button";
import type { Account } from "../../types/Account";

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Account>();
  
   const [createAccount, { error }] = useCreateAccountMutation();
  
  const onSubmit: SubmitHandler<Account> = (account: Account) => {
    createAccount(account)
    console.log(error);
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-6 py-5">
        <div className="w-full flex flex-col">
          <InputField label="Name" {...register("first_name", { required: true })} />
          {errors.first_name && <span>Name is required</span>}
        </div>
        <div className="w-full flex flex-col">
          <InputField label="Last Name" {...register("last_name", { required: true })} />
          {errors.last_name && <span>Surname is required</span>}
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