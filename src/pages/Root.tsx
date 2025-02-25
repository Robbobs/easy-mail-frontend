import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
export default function Root() {

    return(
        <div className="bg-neutral-950 h-screen w-screen bg-cover bg-center bg-no-repeat text-[#98abfc]">
            <div className="container mx-auto">
                <Navbar />
                <Panel className="min-h-128 max-h-210 rounded-4xl shadow-lg p-20">
                    <Outlet />
                </Panel>
            </div>
        </div>
    )
}