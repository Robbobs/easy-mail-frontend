import Link from "../components/Link"

export default function HomePage() {
    return(
        <div className="flex flex-col gap-2">
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