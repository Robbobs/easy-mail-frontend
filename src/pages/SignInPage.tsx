import Title from "../components/Title"
import LoginForm from "../components/ui/LoginForm"

export default function SignInPage() {
    return(
        <div className="max-w-[800px] mx-auto">
            <Title className="text-center">Login</Title>
            <LoginForm/>
        </div>
    )
}