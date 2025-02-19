import classnames from 'classnames';
import { ReactNode, HTMLAttributes } from 'react';

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Panel({ children, className, ...rest }: PanelProps) { 
  const finalClassNames = classnames(
    className,
    'border rounded p-3 shadow bg-gray-800 w-auto h-auto',
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
