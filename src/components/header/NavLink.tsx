
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, isActive, icon, children }) => {
  return (
    <Link to={to}>
      <Button 
        variant="ghost" 
        size="sm"
        className={`${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
      >
        {icon}
        {children}
      </Button>
    </Link>
  );
};
