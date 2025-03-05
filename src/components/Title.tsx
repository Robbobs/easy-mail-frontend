import classNames from "classnames";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Title({title, children, className, ...rest}: TitleProps) {
  const classes = classNames(className, "text-6xl font-bold");

  return <h1 className={classes} {...rest}>{children}</h1>
}