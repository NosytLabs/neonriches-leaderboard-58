
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface AuthButtonProps {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  variant = 'default',
  size = 'default',
  className = ''
}) => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/login');
  };
  
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleLogin}
    >
      Sign In
    </Button>
  );
};

export default AuthButton;
