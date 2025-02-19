import { ReactNode } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

interface LinkProps {
    to: string;
    children: ReactNode;
    className?: string;
    activeClassName?: boolean;
}

function Link({ to, children, className, activeClassName }: LinkProps) {
  const navigate = useNavigate();
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

