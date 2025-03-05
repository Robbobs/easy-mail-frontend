import RegistrationForm from "../components/ui/RegistrationForm"
import Title from "../components/Title"

export default function SignUpPage() {

    return(
        <div className="max-w-[800px] mx-auto">
            <Title className="text-center">Registration</Title>
            <RegistrationForm/>
        </div>
    )
}   