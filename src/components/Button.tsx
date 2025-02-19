import classnames from "classnames";
import { twMerge } from 'tailwind-merge';
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

export default function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger, 
    outline, 
    rounded,
    ...rest
}: ButtonProps){
    const selectedVariants = [primary, secondary, success, warning, danger].filter(Boolean).length;
    if (selectedVariants > 1) {
      console.warn(
        "Only one of primary, secondary, success, warning, or danger should be set at a time."
      );
    }
    const classes = twMerge(
        classnames(rest.className, "flex gap-2 items-center px-3 py-1.5 border", {
            "border-gray-300 bg-gray-300 hover:bg-gray-600 text-black": primary,
            "border-blue-500 bg-blue-500 hover:bg-gray-700 text-white": secondary,
            "border-teal-500 bg-teal-500 hover:bg-teal-700 text-white": success,
            "border-amber-500 bg-amber-500 hover:bg-amber-700 text-white": warning,
            "border-red-500 bg-red-500 hover:bg-red-700 text-white": danger,
            "rounded-full": rounded,
            "bg-transparent": outline,

            "text-white": outline && primary,
            "text-blue-500": outline && secondary,
            "text-teal-500": outline && success,
            "text-amber-500": outline && warning,
            "text-red-500": outline && danger
        })
    );
    
    return <button {...rest} className={classes}>{ children }</button>;
}