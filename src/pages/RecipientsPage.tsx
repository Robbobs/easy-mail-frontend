import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Table, { Config } from "../components/Table";

//TODO: Move recipient interface to a more apropriate place.
interface Recipient {
    name: string,
    email: string
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
        }
    ];

    //TODO: Remove test data!
    const data: Recipient[] = [
        {
            name: 'Roberta',
            email: 'robertatest@gmail.com'
        },
        {
            name: 'Rodrigo',
            email: 'rodrigotest@gmail.com'
        }
    ];

    const keyFn = (recipient: Recipient): string => {
        return recipient.email
    }

    return (
        <div>
            <div className="w-full flex justify-between pb-10">
                <h1 className="text-6xl text-center">Recipients Management</h1>
                
                <Button className="secondary outline rounded" onClick={() => setIsOpen(true)}>
                    New recipient
                </Button>
                { isOpen && modal }
            </div>

            <div className="w-full mx-auto items-center">
                <Table config={config} data={data} keyFn={keyFn} />
            </div>
        </div>
    ) 
}