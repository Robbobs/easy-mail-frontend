import { useCreateGroupMutation } from "../../store/api/groupsApi";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Group } from "../../types/Group";
import InputField from "../InputField";
import Button from "../Button";
import Title from "../Title";
import Toast from "../Toast";

export default function GroupForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Group>();
    const [ createGroup ] = useCreateGroupMutation();

    const onSubmit: SubmitHandler<Group> = async (group: Group) => {
        try {
            createGroup(group).unwrap(); 
            <Toast success>Group created successfully</Toast>

        } catch{
            <Toast warning>Failed to create group</Toast>
        } 
    }

    return(
        <form className="w-98" onSubmit={handleSubmit(onSubmit)}>

            <Title className="text-xl text-center">Add a new Group</Title>
          
            <div className="py-5  w-full flex flex-col">
                <InputField label="Title" {...register("title", { required: true })} />
                {errors.title && <span>Title is required</span>}
            </div>

            <div className="py-5 w-full flex flex-col">
                placeholder
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