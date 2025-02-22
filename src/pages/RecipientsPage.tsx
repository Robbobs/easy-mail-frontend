import { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { FaPencilAlt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import type { Config } from "../components/Table";
import type { Recipient } from "../types/Recipients";

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
            label: 'Groups',
            render: (recipient: Recipient) => recipient.groups
        },
        {
            label: 'Added in',
            render: (recpient: Recipient) => recpient.createdAt
        },
        {
            label: 'Actions',
            render: () => (
                <div className="flex space-x-4">
                    <button className="cursor-pointer">
                        <FaPencilAlt />
                    </button>
                    <button className="cursor-pointer">
                        <FaRegTrashCan />
                    </button>
                </div>
            )
        }
    ];

    //TODO: Remove test data!
    const data: Recipient[] = [
        {
            name: 'Roberta',
            email: 'robertatest@gmail.com',
            groups: 'Kukinators, Mozinhus',
            createdAt: '24/07/2023'
        },
        {
            name: 'Rodrigo',
            email: 'rodrigotest@gmail.com',
            groups: 'Mozinhus',
            createdAt: '22/07/2023'
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