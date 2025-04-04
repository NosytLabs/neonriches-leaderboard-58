
import React, { ReactNode } from 'react';
import Layout from './Layout';

interface AppLayoutProps {
  children: ReactNode;
  transparent?: boolean;
  className?: string;
}

/**
 * Alias for Layout component for backward compatibility
 */
const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  transparent = false, 
  className = '' 
}) => {
  return (
    <Layout transparent={transparent} className={className}>
      {children}
    </Layout>
  );
};

export default AppLayout;
