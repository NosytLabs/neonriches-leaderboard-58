
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Shell } from '@/components/ui/shell';

const MainLayout = () => {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
};

export default MainLayout;
