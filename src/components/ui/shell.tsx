
import React from 'react';

interface ShellProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Shell = ({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ShellProps) => {
  return (
    <Component className={`container mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </Component>
  );
};

// Export both as default and named export to support different import styles
export { Shell };
export default Shell;
