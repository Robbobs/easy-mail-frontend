import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Root() {

    return(
        <div className="bg-neutral-950 h-screen w-screen bg-cover bg-center bg-no-repeat text-[#98abfc]">
            <div className="container mx-auto">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}