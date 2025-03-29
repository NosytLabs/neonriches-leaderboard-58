
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';

interface AuthButtonProps {
  className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ className }) => {
  const { isAuthenticated, logout } = useAuth();
  
  if (isAuthenticated) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => logout()}
        className={className}
      >
        <Icon name="LogOut" size="xs" className="mr-2" />
        Logout
      </Button>
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
          <Icon name="LogIn" size="xs" className="mr-2" />
          Login
        </Link>
      </Button>
      
      <Button
        variant="royalGold"
        size="sm"
        asChild
        className={className}
      >
        <Link to="/register">
          <Icon name="UserPlus" size="xs" className="mr-2" />
          Register
        </Link>
      </Button>
    </div>
  );
};

export default AuthButton;
