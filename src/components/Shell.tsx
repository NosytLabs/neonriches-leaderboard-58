
import React, { ReactNode } from 'react';

interface ShellProps {
  children: ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default Shell;
