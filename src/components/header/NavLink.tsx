
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, className = "" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to}>
      <Button 
        variant="ghost" 
        size="sm"
        className={`${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'} ${className}`}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavLink;
