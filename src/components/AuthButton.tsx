
// This file is read-only, so we need to create a small wrapper component
// that properly handles the fullWidth prop

import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/auth';

interface AuthButtonProps {
  fullWidth?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ fullWidth = false }) => {
  const { openAuthModal } = useAuth();
  
  return (
    <Button 
      onClick={openAuthModal}
      className={fullWidth ? "w-full" : ""}
      variant="royal"
      size="sm"
    >
      <LogIn className="w-4 h-4 mr-2" />
      Sign In
    </Button>
  );
};

export default AuthButton;
