import classNames from "classnames";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Title({children, className, ...rest}: TitleProps) {
  const classes = classNames("text-6xl font-bold", className);

  return <h1 className={classes} {...rest}>{children}</h1>
}