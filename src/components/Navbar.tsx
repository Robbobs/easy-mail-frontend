import Dropdown, { Option } from "./Dropdown";
import Panel from "./Panel";
import Button from "./Button";

export default function Navbar(){

    const email: Option[] = [
        {
            label: 'Send email',
            value: '/send-email',
        },
        {
            label: 'Write an email',
            value: '/write-email'
        }
    ];

    const handleClick = (option: Option) => {
        console.log('selected:', option);
    }

    return (
        <div className="w-full max-h-[20px]">
            <Panel className="flex flex-row justify-between">
                <h1 className="text-4xl">
                    Easy Mail
                </h1>

                <div className="relative flex flex-row">
                    <Dropdown options={email} label={'Emails'} onChange={handleClick} /> 
                </div>
                
                <Button primary rounded outline>
                    logout
                </Button>   
            </Panel>
        </div>
    )
}