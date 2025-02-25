import Link from "./Link";
import Panel from "./Panel";
import Button from "./Button";
import Dropdown, { Option } from "./Dropdown";
import { useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();
    const email: Option[] = [
        {
            label: 'Send email',
            value: '/send-email',
        },
        {
            label: 'Sent emails',
            value: 'sent-emails'
        },
        {
            label: 'Write an email',
            value: '/write-email-template'
        }
    ];

    return (
        <div className="w-full max-h-[20px] pt-5 pb-23">
            <Panel className="px-20 flex flex-row items-center justify-between rounded-4xl shadow-lg" >
                <Link className="text-[#98abfc] text-4xl" to={'/'}>
                    Easy Mail
                </Link>

                <div className="flex flex-row items-center gap-20">
                    <div className="relative flex flex-row">
                        <Dropdown 
                            options={email} 
                            label={'Emails'} 
                            onChange={(option: Option) => navigate(option.value.toString())}
                        /> 
                    </div>

                    <Link className="text-[#98abfc]" activeClassName="border-b-3 border-slate-500 text-slate-500"  to={'/recipients'}>
                        Recipients
                    </Link>

                    <Link className="text-[#98abfc]" activeClassName="border-b-3 border-slate-500 text-slate-500"  to={'/groups'}>
                        Groups
                    </Link>                
                </div>

                <Button className="text-gray-300" danger rounded outline>
                    logout
                </Button>   
            </Panel>
        </div>
    )
}