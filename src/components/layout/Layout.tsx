
import React from 'react';
import { Outlet } from 'react-router-dom';
import SimpleLayout from '@/components/layout/SimpleLayout';

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  transparentHeader?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  centered?: boolean;
  showFooter?: boolean;
  disablePadding?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  className,
  transparentHeader = false,
  fullWidth = false,
  fullHeight = false,
  centered = false,
  showFooter = true,
  disablePadding = false
}) => {
  return (
    <SimpleLayout
      title={title}
      fullWidth={fullWidth}
      showFooter={showFooter}
      className={className}
    >
      {children || <Outlet />}
    </SimpleLayout>
  );
};

export default Layout;
