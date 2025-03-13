import Link from "../components/Link"
import Title from "../components/Title"

export default function HomePage() {
    return(
        <div className="flex flex-col gap-2">
            <Title className="text-center mb-10">Home Page</Title>
            <Link to="/">
                Home
            </Link>
            <Link to="/signIn">
                Sign In
            </Link>
            <Link to="/signUp">
                Sign Up
            </Link>
        </div>
    )
}