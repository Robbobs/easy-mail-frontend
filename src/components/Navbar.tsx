import Link from "./Link";
import Panel from "./Panel";
import Button from "./Button";
import Dropdown, { Option } from "./Dropdown";

export default function Navbar(){

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
        <div className="w-full max-h-[20px] pt-5">
            <Panel className="flex flex-row items-center justify-between">
                <Link className="text-gray-300 text-4xl" to={'/'}>
                    Easy Mail
                </Link>

                <div className="flex flex-row items-center gap-30">
                    <div className="shadow-lg relative flex flex-row">
                        <Dropdown 
                            options={email} 
                            label={'Emails'} 
                            onChange={(option: Option) => console.log('selected:', option)}  
                        /> 
                    </div>

                    <Link className="text-gray-300" to={'/recipients'}>
                        Recipients
                    </Link>

                    <Link className="text-gray-300" to={'/groups'}>
                        Groups
                    </Link>                
                </div>

                <Button className="text-gray-300" primary rounded outline>
                    logout
                </Button>   
            </Panel>
        </div>
    )
}