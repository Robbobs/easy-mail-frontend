import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Root() {

    return(
        <div className="h-screen w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/stay-current-with-email_1300_867.png')" }}>
            <div className="container mx-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}