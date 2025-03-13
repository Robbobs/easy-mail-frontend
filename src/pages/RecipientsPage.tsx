import { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { FaPencilAlt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import type { Config } from "../components/Table";
import type { Recipient } from "../types/Recipient";
import RecipientForm from "../components/ui/RecipientForm";
import { useGetRecipientsQuery } from "../store/api/recipientsApi";

export default function RecipientsPage(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { data } = useGetRecipientsQuery();
    
    const modal = (
        <Modal onClose={() => setIsOpen(false)}>
            <RecipientForm />
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
            render: (recipient: Recipient) => recipient.created_at ? recipient.created_at.toString() : '-'
        },
        {
            label: 'Actions',
            render: () => (
                <div className="flex space-x-4">
                    <button className="cursor-pointer hover:text-violet-500">
                        <FaPencilAlt />
                    </button>
                    <button className="cursor-pointer hover:text-violet-500">
                        <FaRegTrashCan />
                    </button>
                </div>
            )
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
                <Table config={config} data={data?.results} keyFn={keyFn} />
            </div>
        </div>
    ) 
}