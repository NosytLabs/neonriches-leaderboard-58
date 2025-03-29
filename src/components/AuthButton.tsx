
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/auth';

interface AuthButtonProps {
  fullWidth?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ fullWidth = false }) => {
  const { user, signIn, signOut } = useAuth();
  const isAuthenticated = !!user;
  
  const handleAuth = () => {
    if (isAuthenticated) {
      // Show user menu or profile
    } else {
      signIn();
    }
  };
  
  return (
    <Button 
      onClick={handleAuth}
      className={fullWidth ? "w-full" : ""}
      variant="royal"
      size="sm"
    >
      <LogIn className="w-4 h-4 mr-2" />
      {isAuthenticated ? 'Account' : 'Sign In'}
    </Button>
  );
};

export default AuthButton;
