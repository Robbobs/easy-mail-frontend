import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useCheckSessionQuery } from "../store/api/authApi";

export default function Root() {
    const { data } = useCheckSessionQuery();

    return (
        <div className="bg-[url(/src/assets/stay-current-with-email_1300_867.png)] bg-cover">
            <div className="bg-[#1b2037] h-screen w-screen container mx-auto text-[#98abfc] shadow-lg">
                {data?.isAuthenticated && <Navbar />}
                <Outlet />
            </div>
        </div>
    );
}
