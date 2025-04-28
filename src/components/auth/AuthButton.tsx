
import React from 'react';
import { Button } from '@/components/ui/button';
import useAuth from '@/hooks/useAuth';

interface AuthButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'royal';
  size?: 'default' | 'sm' | 'lg';
}

const AuthButton: React.FC<AuthButtonProps> = ({ variant = 'default', size = 'default' }) => {
  const { isAuthenticated, login } = useAuth();
  
  const handleLogin = async () => {
    try {
      await login({ username: 'demo', password: 'password' });
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  
  if (isAuthenticated) {
    return null;
  }
  
  return (
    <Button 
      variant={variant} 
      size={size}
      onClick={handleLogin}
    >
      Log In
    </Button>
  );
};

export default AuthButton;
