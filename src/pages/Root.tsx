import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Root() {

    return(
        <div className="bg-[url(/stay-current-with-email_1300_867.png)] bg-cover">
            <div className="bg-[#1b2037] h-screen w-screen container mx-auto px-30 text-[#98abfc] shadow-lg">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}