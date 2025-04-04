
import React, { ReactNode } from 'react';
import { Shell } from '@/components/ui/Shell';

interface LayoutProps {
  children: ReactNode;
  transparent?: boolean;
  className?: string;
}

/**
 * Main application layout component
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  transparent = false, 
  className = '' 
}) => {
  return (
    <Shell transparent={transparent} className={className}>
      {children}
    </Shell>
  );
};

export default Layout;
