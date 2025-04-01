
import React, { ReactNode } from 'react';

interface ShellProps {
  children: ReactNode;
  className?: string;
}

const Shell: React.FC<ShellProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default Shell;
