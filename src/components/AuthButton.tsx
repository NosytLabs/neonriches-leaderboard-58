
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { LogIn } from 'lucide-react';
import { useState } from 'react';
import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';

interface AuthButtonProps {
  fullWidth?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ fullWidth = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset to login when dialog closes
      setTimeout(() => setAuthMode('login'), 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button 
          className={`${fullWidth ? 'w-full' : ''} bg-royal-gold hover:bg-royal-gold/90 text-black`}
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login / Register
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        {authMode === 'login' ? (
          <LoginForm onSwitchToRegister={() => setAuthMode('register')} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setAuthMode('login')} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthButton;
