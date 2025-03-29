
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-bg-dark to-bg-dark-lighter relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-96 h-96 bg-royal-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-royal-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-navy/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <Header />
      
      <main className="flex-grow z-0 relative">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
