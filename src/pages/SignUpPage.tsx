import RegistrationForm from "../components/ui/RegistrationForm"
import Title from "../components/Title"
import Link from "../components/Link";

export default function SignUpPage() {
    return(
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-16">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-indigo-600">easy mail</h1>
                </div>    
                <Title className="text-center mb-10">Registration</Title>
                <RegistrationForm />

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? {" "}
                    <Link to="/signIn" className="text-indigo-600 font-semibold hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>

            <div className="hidden md:flex w-1/2 bg-indigo-50 items-center justify-center">
                <img src="src\assets\email-phone.jpg" alt="girl using mail with her phone" />   
            </div>
        </div>
    );
}   