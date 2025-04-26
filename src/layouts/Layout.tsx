
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b border-border py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">SpendThrone</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/royal-prestige" className="hover:text-primary">Royal Prestige</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-background border-t border-border py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SpendThrone. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
