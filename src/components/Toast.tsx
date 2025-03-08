// import classNames from "classnames";
// import { twMerge } from "tailwind-merge";
// import { ReactNode, useEffect, useRef } from "react";
// import Button from "./Button";

// interface ToastProps {
//   children: ReactNode;
//   success?: boolean;
//   warning?: boolean;
//   danger?: boolean;
//   duration?: number;
//   onClose?: () => void;
// }

// export default function Toast({
//   children,
//   success,
//   warning,
//   danger,
//   duration = 3000,
//   onClose,
// }: ToastProps) {
//   const toastRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (duration) {
//       const timer = setTimeout(() => {
//         if (onClose) onClose();
//       }, duration);
//       return () => clearTimeout(timer);
//     }
//   }, [duration, onClose]);

//   const selectedVariants = [success, warning, danger].filter(Boolean).length;
//   if (selectedVariants > 1) {
//     console.warn("Only one of success, warning, or danger should be set at a time.");
//   }

//   const classes = twMerge(
//     classNames(
//       "flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800",
//       {
//         "border-green-500 bg-green-100 dark:bg-green-800 text-green-500 dark:text-green-200": success,
//         "border-red-500 bg-red-100 dark:bg-red-800 text-red-500 dark:text-red-200": danger,
//         "border-amber-500 bg-amber-100 dark:bg-orange-700 text-orange-500 dark:text-orange-200": warning,
//       }
//     )
//   );

//   return (
//     <div ref={toastRef} className={classes}>
//       <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg">{icon}</div>
//       <div className="ms-3 text-sm font-normal">{children}</div>
//       <Button primary outline rounded>
//         X
//       </Button>
//     </div>
//   );
// }
