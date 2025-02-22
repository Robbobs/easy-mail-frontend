import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { IoPersonAdd } from "react-icons/io5";
import Table, { Config } from "../components/Table";

//TODO: Move recipient interface to a more apropriate place.
interface Recipient {
    name: string,
    email: string,
    createdAt: string
}

export default function RecipientsPage(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const modal = (
        <Modal onClose={() => setIsOpen(false)}>
            kekeke
        </Modal>
    )

    const config: Config<Recipient>[] = [
        {
            label: 'Name',
            render: (recipient: Recipient) => recipient.name
        },
        {
            label: 'Email',
            render: (recipient: Recipient) => recipient.email
        },
        {
            label: 'Added in',
            render: (recpient: Recipient) => recpient.createdAt
        }
    ];

    //TODO: Remove test data!
    const data: Recipient[] = [
        {
            name: 'Roberta',
            email: 'robertatest@gmail.com',
            createdAt: '24/07/2023'
        },
        {
            name: 'Rodrigo',
            email: 'rodrigotest@gmail.com',
            createdAt: '22/02/2024'
        }
    ];

    const keyFn = (recipient: Recipient): string => {
        return recipient.email
    }

    return (
        <div>
            <div className="w-full flex justify-between pb-10">
                <h1 className="text-6xl text-center">Recipients Management</h1>
                
                <Button primary outline rounded onClick={() => setIsOpen(true)}>
                    <IoPersonAdd />
                    New recipient
                </Button>
                { isOpen && modal }
            </div>

            <div className="flex justify-center">
                <Table config={config} data={data} keyFn={keyFn} />
            </div>
        </div>
    ) 
}