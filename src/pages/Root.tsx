import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
export default function Root() {

    return(
        <div className="bg-[url('/stay-current-with-email_1300_867.png')] h-screen w-screen bg-cover bg-center bg-no-repeat text-gray-300">
            <div className="container mx-auto">
                <Navbar />
                <Panel className="min-h-128 max-h-210 rounded-4xl shadow-lg">
                    <Outlet />
                </Panel>
            </div>
        </div>
    )
}