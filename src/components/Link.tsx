import { ReactNode } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface LinkProps {
    to: string;
    children: ReactNode;
    className?: string;
    activeClassName?: string;
}

export default function Link({ to, children, className, activeClassName }: LinkProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const classes = twMerge(
    'text-indigo-600',
    classNames(className, location.pathname === to && activeClassName)
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
     
    e.preventDefault();
    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}
