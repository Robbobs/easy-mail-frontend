import classNames from "classnames";
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
  isLoading?: boolean;
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
    isLoading,
    ...rest
}: ButtonProps){
    const selectedVariants = [primary, secondary, success, warning, danger].filter(Boolean).length;
    if (selectedVariants > 1) {
      console.warn(
        "One of primary, secondary, success, warning, or danger should be set at a time."
      );
    }

    const classes = twMerge(
        classNames(rest.className, "flex justify-center items-center px-5 py-1.5 border gap-2", {
            "border-[#98abfc] bg-[#98abfc] hover:bg-[#5271fa] hover:border-[#5271fa] text-black": primary,
            "border-blue-500 bg-blue-500 hover:bg-blue-700 hover:border-blue-700 text-white": secondary,
            "border-teal-500 bg-teal-500 hover:bg-teal-700 hover:border-teal-700 text-white": success,
            "border-amber-500 bg-amber-500 hover:bg-amber-700 hover:border-amber-700 text-white": warning,
            "border-red-500 bg-red-500 hover:bg-red-700 hover:border-red-700 text-white": danger,

            "rounded-full": rounded,

            "bg-transparent hover:bg-transparent": outline,

            "text-[#98abfc] hover:text-violet-500": outline && primary,
            "text-blue-500 hover:text-blue-700": outline && secondary,
            "text-teal-500 hover:text-teal-700": outline && success,
            "text-amber-500 hover:text-amber-700": outline && warning,
            "text-red-500 hover:text-red-700": outline && danger
        })
    );

    const loadingAnimation = (
      <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">Processing...</svg>
    )
    
    return <button {...rest} className={classes}>
      { isLoading ? loadingAnimation : children }
    </button>;
}