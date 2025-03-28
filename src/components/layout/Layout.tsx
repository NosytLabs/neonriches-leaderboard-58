
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useResponsive } from '@/hooks/use-responsive';

const Layout: React.FC = () => {
  const { isMobile } = useResponsive();

  // Add viewport meta tag for better mobile experience
  useEffect(() => {
    // Check if the viewport meta tag exists
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    
    // If not, create it
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    
    // Set the content attribute with mobile-optimized values
    viewportMeta.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
    );
    
    // Add touch-action to prevent double-tap zoom
    const style = document.createElement('style');
    style.textContent = `
      * {
        touch-action: manipulation;
      }
      body {
        -webkit-tap-highlight-color: transparent;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Cleanup is optional here as these are generally persistent
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isMobile ? 'safe-bottom prevent-overscroll' : ''}`}>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
