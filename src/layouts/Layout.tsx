
import React from 'react';
import Shell from '@/components/ui/Shell';

interface LayoutProps {
  children: React.ReactNode;
  transparent?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, transparent = false }) => {
  return (
    <Shell transparent={transparent}>
      {children}
    </Shell>
  );
};

export default Layout;
