import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
import classNames from "classnames";

export interface Option {
    label: string | number;
    value: string | number;
}

interface DropdownProps {
    options: Option[];
    label?: string | number;
    onChange: (option: Option) => void;
    className?: string;
}

export default function Dropdown({ options, label, onChange, className }: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOptionClick = (option: Option) => {
        setIsOpen(false);
        onChange(option);
    }

    const classes = classNames(
        className,
        "flex justify-between items-center cursor-pointer"
    )

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
                className={classes}
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