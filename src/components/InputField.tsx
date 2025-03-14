import classNames from "classnames";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputClassName?: string;
    labelClassName?: string;
  }

export default function InputField({label, inputClassName, labelClassName, ...rest}: InputFieldProps){
    const inputClasses = classNames(
        'peer placeholder-transparent h-10 w-full border-b-2 border-[#98abfc] text-[#98abfc] bg-transparent',
        'focus:outline-none focus:border-violet-500',
        inputClassName
    )

    const labelClasses = classNames(
        'absolute left-0 -top-3.5 text-[#98abfc] text-sm font-bold',
        'peer-placeholder-shown:text-base peer-placeholder-shown:text-[#98abfc] peer-placeholder-shown:top-2 transition-all',
        'peer-focus:-top-3.5 peer-focus:text-violet-500 peer-focus:text-sm',
        labelClassName
    )
    
    return(
        <div className="relative">
            <input className={inputClasses} placeholder={label} {...rest} />
            {label && <label className={labelClasses}>{label}</label>}
        </div>
    );
}