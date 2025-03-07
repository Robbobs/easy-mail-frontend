import { useAppSelector } from "../custom-hooks/storeHooks";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

    return(
        <div className="bg-[url(/stay-current-with-email_1300_867.png)] bg-cover">
            <div className="bg-[#1b2037] h-screen w-screen container mx-auto px-30 text-[#98abfc] shadow-lg">
                { isAuthenticated && <Navbar /> }
                <Outlet />
            </div>
        </div>
    )
}