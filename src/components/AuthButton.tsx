
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { LogIn, LogOut, UserPlus } from 'lucide-react';

interface AuthButtonProps {
  className?: string;
  variant?: 'default' | 'compact';
}

const AuthButton: React.FC<AuthButtonProps> = ({ className, variant = 'default' }) => {
  const { isAuthenticated, logout } = useAuth();
  
  if (isAuthenticated) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => logout()}
        className={className}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    );
  }
  
  if (variant === 'compact') {
    return (
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          asChild
          className={className}
        >
          <Link to="/login">
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="sm"
        asChild
        className={className}
      >
        <Link to="/login">
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Link>
      </Button>
      
      <Button
        variant="default"
        size="sm"
        asChild
        className={className}
      >
        <Link to="/register">
          <UserPlus className="mr-2 h-4 w-4" />
          Register
        </Link>
      </Button>
    </div>
  );
};

export default AuthButton;

