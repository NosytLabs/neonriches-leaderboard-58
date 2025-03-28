
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  handleLogin: () => void;
  handleRegister: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ handleLogin, handleRegister }) => {
  return (
    <>
      <Button size="sm" variant="outline" className="text-white border-white/20 hover:bg-white/10" onClick={handleLogin}>
        <LogIn className="mr-2 h-4 w-4" />
        Login
      </Button>
      <Button size="sm" className="bg-royal-gold hover:bg-royal-gold/90 text-black" onClick={handleRegister}>
        <UserPlus className="mr-2 h-4 w-4" />
        Register
      </Button>
    </>
  );
};

export default AuthButtons;
