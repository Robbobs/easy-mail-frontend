import { useCreateRecipientMutation } from "../../store/api/recipientsApi";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Recipient } from "../../types/Recipient";
import InputField from "../InputField";
import Button from "../Button";
import Title from "../Title";
import Toast from "../Toast";

export default function RecipientForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Recipient>();
    const [ createRecipient ] = useCreateRecipientMutation();

    const onSubmit: SubmitHandler<Recipient> = async (recipient: Recipient) => {
        try {
            createRecipient(recipient).unwrap(); 
            <Toast success>Recipient created successfully</Toast>

        } catch{
            <Toast warning>Failed to create recipient</Toast>
        } 
    }

    return(
        <form className="w-98" onSubmit={handleSubmit(onSubmit)}>

            <Title className="text-xl text-center">Add a new Recipient</Title>
          
            <div className="py-5  w-full flex flex-col">
                <InputField label="Name" {...register("name", { required: true })} />
                {errors.name && <span>Name is required</span>}
            </div>

            <div className="py-5 w-full flex flex-col">
                <InputField label="E-mail" {...register("email", { required: true })} />
                {errors.email && <span>Email is required</span>}
            </div>
            <div className="flex gap-2">
                <Button className="w-full" primary rounded outline>
                    Add
                </Button>
                <Button className="w-full" success rounded outline>
                    Save
                </Button>
            </div>
        </form>
      );
}