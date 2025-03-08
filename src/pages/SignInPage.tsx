import Title from "../components/Title";
import LoginForm from "../components/ui/LoginForm";

export default function SignInPage() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-16">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-indigo-600">easy mail</h1>
            </div>
            <Title className="text-center">Login</Title>
            <LoginForm />

            <p className="text-center text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="#" className="text-indigo-600 font-semibold hover:underline">
                Sign up
                </a>
            </p>
            </div>

            <div className="hidden md:flex w-1/2 bg-indigo-50 items-center justify-center">
            <img
                src="https://cdn.dribbble.com/users/458522/screenshots/16084298/media/73b2e9f5e0e9eaa0f84dd9f4d3f6bbd8.png"
                alt="Login Illustration"
                className="w-3/4 max-w-lg"
            />
            </div>
        </div>
    );
}
