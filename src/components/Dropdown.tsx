import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export interface Option {
    label: string | number;
    value: string | number;
}

interface DropdownProps {
    options: Option[];
    label?: string | number;
    onChange: (option: Option) => void;
}

export default function Dropdown({ options, label, onChange }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOptionClick = (option: Option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOption = options.map((option) => {
        return (
            <div 
                className="hover:bg-gray-600 rounded cursor-pointer p-1" 
                onClick={() => handleOptionClick(option)} 
                key={option.value}
            >
                {option.label}
            </div>
        )
    });

    return (
        <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
            >
                {label || "Select..."}
                <GoChevronDown />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full w-full">
                    {renderedOption}
                </Panel>
            )}
        </div>
    )
}