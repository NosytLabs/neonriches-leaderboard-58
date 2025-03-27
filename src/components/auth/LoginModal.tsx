
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import LoginForm from './LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome Back, Noble</DialogTitle>
          <DialogDescription>
            Enter your royal credentials to access your kingdom
          </DialogDescription>
        </DialogHeader>
        
        <LoginForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
