import { ReactNode } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";

interface LinkProps {
    to: string;
    children: ReactNode;
    className?: string;
    activeClassName?: string;
}

function Link({ to, children, className, activeClassName }: LinkProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const classes = classNames(
        'text-blue-500',
        className,
        location.pathname === to && activeClassName
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

export default Link;

