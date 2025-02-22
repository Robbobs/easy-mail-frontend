import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Panel({ children, className, ...rest }: PanelProps) { 
  const finalClassNames = twMerge('rounded p-3 bg-gray-800 w-auto h-auto', className);

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
