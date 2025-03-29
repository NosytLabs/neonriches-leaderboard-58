
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@/components/ui/container';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Container className="py-4">
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
