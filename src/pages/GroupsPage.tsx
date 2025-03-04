import type { Group } from "../types/Group";
import { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { FaPencilAlt } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import type { Config } from "../components/Table";
import type { Recipient } from "../types/Recipient";
import InputField from "../components/InputField";


export default function GroupsPage(){
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const modal = (
        <Modal onClose={() => setIsOpen(false)}>
            <h1 className="text-6xl text-center">
                Add a new recipient
            </h1>
            <InputField label="Name"/>
            <InputField label="Members" />
            <Button />
        </Modal>
    )

    const config: Config<Group>[] = [
        {
            label: 'Title',
            render: (group: Group) => group.title
        },
        {
            label: 'Members',
            render: (group: Group) => group.members.length > 3 ? `${group.members.slice(0, 2).join(', ')}, ${group.members[2]}...` : group.members.join(', '),
        },
        {
            label: 'Added in',
            render: (group: Group) => group.created_at ? group.created_at.toString() : '-'
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
        },
    ];

    //TODO: Remove test data!
    const data: Group[] = [
        {
            title: 'Grupo dos Kukis',
            members: ['Roberta', 'Rodrigo', 'Toi', 'Dumbledore'],
            created_at: new Date(),
        },
        {
            title: 'Grupo dos mocoiongos',
            members: ['Roberta', 'Rodrigo'],
            created_at: new Date(),
        }
    ];

    const keyFn = (group: Group): string => {
        return group.title
    }

    return (
        <div>
             <div className="w-full flex justify-between pb-10">
                <h1 className="text-6xl text-center">Groups Management</h1>
                
                <Button primary outline rounded onClick={() => setIsOpen(true)}>
                    <IoPersonAdd />
                    New group
                </Button>
                { isOpen && modal }
            </div>

            <div className="flex justify-center">
                <Table config={config} data={data} keyFn={keyFn} />
            </div>
        </div>
    )
}