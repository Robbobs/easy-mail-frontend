import Dropdown, { Option } from "./Dropdown";
import Panel from "./Panel";

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

    const handleClick = () => {
        console.log('hello world');
    }

    return (
        <div className="w-full h-[40px]">
            <Panel>
                <Dropdown options={email} label={'Emails'} onChange={handleClick} />    
            </Panel>
        </div>
    )
}