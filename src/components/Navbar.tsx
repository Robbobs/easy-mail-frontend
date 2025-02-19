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
            label: 'Write an email',
            value: '/write-email'
        }
    ];

    return (
        <div className="w-full max-h-[20px]">
            <Panel className="flex flex-row items-center justify-between">
                <Link className="text-4xl" to={'/'}>
                    Easy Mail
                </Link>

                <div className="shadow-lg relative flex flex-row">
                    <Dropdown 
                        options={email} 
                        label={'Emails'} 
                        onChange={(option: Option) => console.log('selected:', option)} 
                        className='text-blue-500' 
                    /> 
                </div>

                <Link to={'/recipients'}>
                    Recipients
                </Link>

                <Link to={'/groups'}>
                    Groups
                </Link>

                <Button primary rounded outline>
                    logout
                </Button>   
            </Panel>
        </div>
    )
}